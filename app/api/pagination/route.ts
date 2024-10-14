import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Extract query parameters for pagination
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

        // Ensure that page and pageSize are valid numbers
        if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
            return NextResponse.json({ error: 'Invalid pagination parameters' }, { status: 400 });
        }

        // Calculate offset for pagination
        const offset = (page - 1) * pageSize;

        // Connect to the MySQL database
        const connection = await pool.getConnection();

        try {
            // Query to get the paginated posts
            const postsQuery = `
                SELECT 
                    id, title, slug, category,
                    mainImageSrc, mainImageCaption, createdAt as date, isFeature
                FROM posts
                LIMIT ${connection.escape(pageSize)} OFFSET ${connection.escape(offset)}
            `;

            // Query to get the total count of posts
            const countQuery = `
                SELECT COUNT(*) as totalCount
                FROM posts
            `;

            // Execute both queries
            const [postsRows] = await connection.query(postsQuery) as [any[], any];
            const [countRows] = await connection.query(countQuery) as [any[], any];

            if (postsRows.length === 0) {
                return NextResponse.json({ error: 'No posts found' }, { status: 404 });
            }

            // Extract the total count from the count query result
            const totalCount = countRows[0].totalCount;

            // Structure the response
            const posts = postsRows.map((row) => {
                const {
                    id, title, category,
                    mainImageSrc, mainImageCaption,
                    date, isFeature, slug
                } = row;

                return {
                    id,
                    description: title,
                    name: category,
                    imageSrc: mainImageSrc,
                    imageAlt: mainImageCaption,
                    isFeature,
                    date,
                    slug
                };
            });

            return NextResponse.json({ posts, totalCount }, { status: 200 });
        } finally {
            await connection.release();
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}