const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const app = express();
app.use(express.json());

//Environment Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

//Import Routes
const adminRoutes = require("./routes/adminRoutes")
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

//Middleware
app.use(cors());

app.use("/api/admin",adminRoutes);
app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);


//Connect to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB",err));

//start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});