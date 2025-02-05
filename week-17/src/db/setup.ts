import { client } from "../index";

export async function createTables() {
  const usersQuery = `
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        name VARCHAR(50) NOT NULL
    );`;

  const travelPlansQuery = `
    CREATE TABLE travel_plans(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        title VARCHAR(50) NOT NULL,
        destination_city VARCHAR(50) NOT NULL,
        destination_country VARCHAR(50) NOT NULL,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        budget INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `;

  await client.query(usersQuery);
  await client.query(travelPlansQuery);

  return;
}

export async function dropTables() {
  const query = "DROP TABLE travel_plans, users;";

  await client.query(query);
}

module.exports = { createTables, dropTables };
