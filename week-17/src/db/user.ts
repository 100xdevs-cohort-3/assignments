import { client } from '..';
export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}
// This is a database exercise; production authentication is implemented in Weeks 4, 5, 7 and 19.
export async function createUser(username: string, password: string, name: string): Promise<User> {
  const result = await client.query<User>(
    'INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *',
    [username, password, name],
  );
  return result.rows[0];
}
export async function getUser(userId: number): Promise<User | undefined> {
  return (await client.query<User>('SELECT * FROM users WHERE id = $1', [userId])).rows[0];
}
