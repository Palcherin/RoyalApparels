const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");

dotenv.config();

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/Users");
const productRoute = require("./routes/Products");
const orderRoute = require("./routes/Orders");

// Log the types of the imported routes
console.log('Type of databaseSeeder:', typeof databaseSeeder); // Should be 'function' or 'object'
console.log('Type of userRoute:', typeof userRoute); // Should be 'function' or 'object'
console.log('Type of productRoute:', typeof productRoute); // Should be 'function' or 'object'
console.log('Type of orderRoute:', typeof orderRoute); // Should be 'function' or 'object'

// Ensure PORT is a number
const PORT = parseInt(process.env.PORT, 10) || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database with SSL options
// mongoose.connect(process.env.MONGO_URL, {
  
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   ssl: true,
  
//   // sslCA: fs.readFileSync('path/to/ca.pem'), // Uncomment and set the path if using a CA certificate
// }).then(() => console.log("Database connected successfully"))
//   .catch(err => {
//     console.error("Database connection error:", err);
//     process.exit(1); // Exit the process with an error code
//   });

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
