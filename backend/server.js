const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods allowed
  credentials: true // Allow credentials if needed
}));

// Your existing routes and other configurations
app.get('/products', (req, res) => {
  // Your logic to fetch products
  res.json(products); // Example response
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
