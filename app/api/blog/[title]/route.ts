import { PoolConnection, RowDataPacket } from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

interface PostRow extends RowDataPacket {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    mainImageSrc: string;
    mainImageCaption: string;
    publishedAt: string;
    type: 'paragraph' | 'quote' | 'subheading' | 'image';
    content: string | null;
    src: string | null;
    caption: string | null;
    estReadingTime: number;
}

interface StructuredPost {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    mainImage: {
        src: string;
        caption: string;
    };
    body: Array<{
        type: 'paragraph' | 'quote' | 'subheading';
        content: string;
    } | {
        type: 'image';
        src: string;
        caption: string;
    }>;
    publishedAt: string;
    estReadingTime: number;
}

export async function GET(
    req: NextRequest,
    { params }: { params: { title: string } }
): Promise<NextResponse> {
    let connection: PoolConnection | undefined;

    try {
        const { title } = params;
        if (!title) {
            return NextResponse.json({ error: 'title is required' }, { status: 400 });
        }

        // Extract the ID from the end of the slug
        const match = title.match(/^(.*)-(\d+)$/);
        if (!match) {
            return NextResponse.json({ error: 'Invalid slug format' }, { status: 400 });
        }
        const titlePart = match[1]; // Extracted title part
        const id = match[2]; // Extracted numeric ID

        // Connect to the MySQL database
        connection = await pool.getConnection();

        // Fetch the post by title ending with ID using the extracted ID
        const [rows] = await connection.execute<PostRow[]>(`
            SELECT 
                p.id, p.title, p.slug, p.category, p.description, 
                p.mainImageSrc, p.mainImageCaption, p.createdAt as publishedAt,
                pb.type, pb.content, pb.src, pb.caption, p.blog_read as estReadingTime
            FROM posts p
            LEFT JOIN post_body pb ON p.id = pb.postId
            WHERE p.slug = ? AND p.id = ?
        `, [titlePart, id]);

        if (rows.length === 0) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        // Structure the response to group body content under the post
        const post = rows.reduce<StructuredPost>((acc, row) => {
            if (!acc.id) {
                acc = {
                    id: row.id,
                    title: row.title,
                    slug: row.slug,
                    category: row.category,
                    description: row.description,
                    mainImage: {
                        src: row.mainImageSrc,
                        caption: row.mainImageCaption,
                    },
                    body: [],
                    publishedAt: row.publishedAt,
                    estReadingTime: row.estReadingTime
                };
            }

            if (row.type === 'paragraph' || row.type === 'quote' || row.type === 'subheading') {
                acc.body.push({ type: row.type, content: row.content! });
            } else if (row.type === 'image') {
                acc.body.push({ type: 'image', src: row.src!, caption: row.caption! });
            }

            return acc;
        }, {} as StructuredPost);

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    } finally {
        if (connection) await connection.release();
    }
}