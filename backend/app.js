

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const RegRoute = require("./Routes/RegRoute");
const QuestionsRoute = require("./Routes/QuestionsRoute");
const LoginRoute = require("./Routes/LoginRoute");
const CartRoute = require("./Routes/CartRoute"); // Ensure this is correct
const ProductRoute = require("./Routes/ProductRoutes");
const itemRoutes = require("./Routes/itemRoutes");
const favoriteRoutes = require("./Routes/favorites");
const ForgotPasswordRoute = require("./Routes/ForgotPasswordRoute");
const cardRoute = require('./Routes/CardRoute');



const app = express();
const dotenv = require("dotenv");
dotenv.config();




// Middleware
app.use(express.json());
app.use(cors());
app.use('/upload', express.static('upload'));



app.use(cors());


app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

// Route definitions
app.use("/reg", RegRoute);
app.use("/questions", QuestionsRoute);
app.use("/login", LoginRoute);
app.use("/cart", CartRoute); // Make sure this line is included
app.use("/products", ProductRoute);
app.use('/api/items', itemRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/cards",cardRoute);
app.use("/auth", ForgotPasswordRoute);



mongoose
  .connect(
    "mongodb+srv://ytheenura5:dmx4IUrzBFzbti4o@cluster1.n1o1v.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log);