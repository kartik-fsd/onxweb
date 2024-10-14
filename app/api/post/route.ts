import { Post } from '@/components/types/post';
import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body: Post = await req.json();
        // Basic validation
        if (!body.title || !body.slug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Connect to the MySQL database
        const connection = await pool.getConnection();

        try {
            // Start a transaction
            await connection.beginTransaction();
            // Insert post data into the database
            const [result] = await connection.execute(
                `INSERT INTO posts (title, slug, category, description, mainImageSrc, mainImageCaption, isFeature, blog_read) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    body.title,
                    body.slug,
                    body.category,
                    body.description,
                    body.src,
                    body.caption,
                    body.isFeature,
                    body?.blog_read
                ]
            );

            const postId = (result as any).insertId;

            // Insert body content fields dynamically
            const bodyInsertPromises = body.body.map((field) => {
                if ('subheading' in field) {
                    return connection.execute(
                        `INSERT INTO post_body (postId, type, content) VALUES (?, 'subheading', ?)`,
                        [postId, field.subheading]
                    );
                }
                if ('paragraph' in field) {
                    return connection.execute(
                        `INSERT INTO post_body (postId, type, content) VALUES (?, 'paragraph', ?)`,
                        [postId, field.paragraph]
                    );
                } else if ('quote' in field) {
                    return connection.execute(
                        `INSERT INTO post_body (postId, type, content) VALUES (?, 'quote', ?)`,
                        [postId, field.quote]
                    );
                } else if ('image' in field) {
                    return connection.execute(
                        `INSERT INTO post_body (postId, type, src, caption) VALUES (?, 'image', ?, ?)`,
                        [postId, field.image.src, field.image.caption]
                    );
                }
            });

            // Ensure all body insert operations succeed
            await Promise.all(bodyInsertPromises);

            // Commit the transaction
            await connection.commit();

            return NextResponse.json({ message: 'Post created successfully' }, { status: 201 });
        } catch (err) {
            // Rollback the transaction if any operation fails
            await connection.rollback();
            console.error('Transaction failed:', err);
            return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
        } finally {
            // Always release the connection back to the pool
            await connection.release();
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}