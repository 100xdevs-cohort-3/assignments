const mongoose = require("mongoose");
const config =  require("../config");

const CONN_URI = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}/${config.DB_NAME}`;

const connection = mongoose.createConnection(CONN_URI);

connection.on('connected', () => console.log(`connected => ${config.DB_HOST}`));
connection.on('disconnected', () => console.log('disconnected'));
connection.on('reconnected', () => console.log('reconnected'));
connection.on('disconnecting', () => console.log('disconnecting'));
connection.on('close', () => console.log('close'));

module.exports = {
    connection
}