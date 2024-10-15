require('dotenv').config();
const JWT_USER = process.env.JWT_USER
const JWT_ADMIN = process.env.JWT_ADMIN
console.log( JWT_ADMIN);
console.log("JWT_USER:", JWT_USER);

module.exports = {
    JWT_USER,
    JWT_ADMIN
};