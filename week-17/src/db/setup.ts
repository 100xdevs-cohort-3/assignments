import { client } from '..';
import { DB_URL } from '../config';
export async function createTables(): Promise<void> {
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username TEXT UNIQUE NOT NULL CHECK (length(trim(username)) > 0),
      password TEXT NOT NULL,
      name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS travel_plans (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      title TEXT NOT NULL CHECK (length(trim(title)) > 0),
      destination_city TEXT NOT NULL,
      destination_country TEXT NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      budget NUMERIC(12,2) CHECK (budget >= 0),
      CHECK (end_date >= start_date)
    );
    CREATE INDEX IF NOT EXISTS travel_plans_user_id_idx ON travel_plans(user_id);
  `);
}
export async function dropTables(): Promise<void> {
  if (!new URL(DB_URL).pathname.endsWith('_test'))
    throw new Error('Reset requires a dedicated database whose name ends in _test');
  await client.query('DROP TABLE IF EXISTS travel_plans; DROP TABLE IF EXISTS users;');
}
