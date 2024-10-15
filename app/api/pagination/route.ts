import { PoolConnection, RowDataPacket } from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

interface PostRow extends RowDataPacket {
    id: number;
    title: string;
    slug: string;
    category: string;
    mainImageSrc: string;
    mainImageCaption: string;
    createdAt: string;
    isFeature: boolean;
}

interface StructuredPost {
    id: number;
    description: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
    isFeature: boolean;
    date: string;
    slug: string;
}

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest): Promise<NextResponse> {
    let connection: PoolConnection | undefined;

    try {
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const pageSize = parseInt(url.searchParams.get('pageSize') || '10', 10);

        if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
            return NextResponse.json({ error: 'Invalid pagination parameters' }, { status: 400 });
        }

        const offset = (page - 1) * pageSize;

        connection = await pool.getConnection();

        const postsQuery = `
            SELECT 
                id, title, slug, category,
                mainImageSrc, mainImageCaption, createdAt, isFeature
            FROM posts
            ORDER BY createdAt DESC
            LIMIT ? OFFSET ?
        `;

        const countQuery = 'SELECT COUNT(*) as total FROM posts';

        const [postsRows] = await connection.query<PostRow[]>(postsQuery, [pageSize, offset]);
        const [countRows] = await connection.query<RowDataPacket[]>(countQuery);

        if (postsRows.length === 0 && page !== 1) {
            return NextResponse.json({ error: 'No posts found for this page' }, { status: 404 });
        }

        const posts: StructuredPost[] = postsRows.map((row) => ({
            id: row.id,
            description: row.title,
            name: row.category,
            imageSrc: row.mainImageSrc,
            imageAlt: row.mainImageCaption,
            isFeature: row.isFeature,
            date: row.createdAt,
            slug: row.slug
        }));

        const totalCount = (countRows[0] as RowDataPacket).total;

        return NextResponse.json({
            posts,
            pagination: {
                currentPage: page,
                pageSize,
                totalCount,
                totalPages: Math.ceil(totalCount / pageSize)
            }
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    } finally {
        if (connection) await connection.release();
    }
}