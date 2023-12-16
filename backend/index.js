const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require('mongoose');
const port = 5000

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/aniket");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas:", error);
  }
}

async function closeDatabaseConnection() {
  try {
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.log("Error disconnecting from MongoDB:", error);
  }
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/likes', async (req, res) => {
  const { id } = req.query;
  const coll = mongoose.connection.collection('courses');
  const result = await coll.findOne({'_id': parseInt(id)});
  res.json({'likes': result.likes})
})

app.listen(port, () => {
  connectToDatabase();
  console.log(`Example app listening on port ${port}`)
})