const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const { dataBaseUri } = require('./databaseConnect');
// Initialize the Express app and set up middleware
const app = express();
app.use(cors());
app.use(express.json());
// connection by mongoose
mongoose
  .connect(dataBaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Database connection failed:', error);
  });

// Define the root endpoint for the server
app.get('/', async (req, res) => {
  res.send('Server is running');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});