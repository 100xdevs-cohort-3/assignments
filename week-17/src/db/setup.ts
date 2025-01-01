import { client } from '../index';


export async function createTables() {
    // Users should create the tables manually as per the schema in README
    console.log('Please create the tables manually using the SQL provided in the README.md.');
}

export async function dropTables() {
    // Users can manually drop tables as needed, or use a similar SQL query to drop them
    console.log('Please drop the tables manually if required.');
}

module.exports = { createTables, dropTables };
