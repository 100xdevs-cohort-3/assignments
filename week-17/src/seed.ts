import { client } from './index';
import { createTables } from './db/setup';
import { createTravelPlan } from './db/travel';
async function seed() {
  await client.connect();
  try {
    await createTables();
    const result = await client.query(
      'INSERT INTO users(username,password,name) VALUES($1,$2,$3) ON CONFLICT(username) DO UPDATE SET name=EXCLUDED.name RETURNING id',
      ['john_doe', 'exercise-only', 'John Doe'],
    );
    const userId = result.rows[0].id;
    const existing = await client.query('SELECT id FROM travel_plans WHERE user_id=$1', [userId]);
    if (!existing.rowCount)
      await createTravelPlan(
        userId,
        'Paris Adventure',
        'Paris',
        'France',
        '2027-06-01',
        '2027-06-10',
        2500,
      );
    console.log('Sample travel plan is ready.');
  } finally {
    await client.end();
  }
}
seed().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
