import { PoolConnection, RowDataPacket } from 'mysql2/promise';
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// Define interface for database row
interface PostRow extends RowDataPacket {
    id: number;
    title: string;
    slug: string;
    category: string;
    mainImageSrc: string;
    mainImageCaption: string;
    date: string;
    isFeature: boolean;
}

// Define interface for structured output
interface StructuredPost {
    id: number;
    description: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
    slug: string;
    isFeature: boolean;
    date: string;
}

export async function GET(): Promise<NextResponse> {
    let connection: PoolConnection | undefined;

    try {
        // Connect to the MySQL database
        connection = await pool.getConnection();

        // Fetch all posts without author data
        const [rows] = await connection.execute<PostRow[]>(`
            SELECT 
                id, title, slug, category,
                mainImageSrc, mainImageCaption, createdAt as date, isFeature
            FROM posts
        `);

        if (rows.length === 0) {
            return NextResponse.json({ error: 'No posts found' }, { status: 404 });
        }

        // Structure the response
        const posts: StructuredPost[] = rows.map((row) => ({
            id: row.id,
            description: row.title,
            name: row.category,
            imageSrc: row.mainImageSrc,
            imageAlt: row.mainImageCaption,
            slug: row.slug,
            isFeature: row.isFeature,
            date: row.date
        }));

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    } finally {
        if (connection) await connection.release();
    }
}