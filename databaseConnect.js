// database connection


// Connect to the MongoDB database
require('dotenv').config();
const dataBaseUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l1qze.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

module.exports = { dataBaseUri };