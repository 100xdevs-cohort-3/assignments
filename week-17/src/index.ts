import { Client } from 'pg';
import { DB_URL } from './config';
export const client = new Client({ connectionString: DB_URL });
if (require.main === module) {
  import('./db/setup')
    .then(async ({ createTables }) => {
      await client.connect();
      try {
        await createTables();
        console.log('Travel tables are ready.');
      } finally {
        await client.end();
      }
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
