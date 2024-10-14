import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Connect to the MySQL database
        const connection = await pool.getConnection();

        try {
            // Fetch all posts without author data
            const [rows] = await connection.execute(`
                SELECT 
                    id, title, slug, category,
                    mainImageSrc, mainImageCaption, createdAt as date, isFeature
                FROM posts
            `) as [any[], any];

            if (rows.length === 0) {
                return NextResponse.json({ error: 'No posts found' }, { status: 404 });
            }

            // Structure the response
            const posts = rows.map((row: any) => {
                const {
                    id, title, category, slug,
                    mainImageSrc, mainImageCaption, date, isFeature
                } = row;

                return {
                    id,
                    description: title,
                    name: category,
                    imageSrc: mainImageSrc,
                    imageAlt: mainImageCaption,
                    slug,
                    isFeature,
                    date
                };
            });

            return NextResponse.json(posts, { status: 200 });
        } finally {
            await connection.release();
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}