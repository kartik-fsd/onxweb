import mysql from 'mysql2';

// Database connection pool to handle connections efficiently
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Kartik@123',
    database: process.env.DB_NAME || 'onx_blog_cms',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise();

export default pool;
