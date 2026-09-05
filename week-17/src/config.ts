import 'dotenv/config';
// Use a dedicated *_test database when running the destructive integration tests.
export const DB_URL = process.env.DATABASE_URL || '';
