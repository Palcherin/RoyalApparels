const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/Users");
const productRoute = require("./routes/Products");
const orderRoute = require("./routes/Orders");

// Log the types of the imported routes
console.log('Type of databaseSeeder:', typeof databaseSeeder); 
console.log('Type of userRoute:', typeof userRoute); 
console.log('Type of productRoute:', typeof productRoute); 
console.log('Type of orderRoute:', typeof orderRoute); 

const PORT = parseInt(process.env.PORT, 10) || 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Database connected successfully"))
//   .catch(err => {
//     console.error("Database connection error:", err);
//     process.exit(1); // Exit the process with an error code
//   });
  const client = new MongoClient(process.env.MONGO_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

// Use routes
app.use("/api/seed", databaseSeeder);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// Error handling middleware for Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
