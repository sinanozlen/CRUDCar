const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const CarRouter = require("./router/CarRouter"); 

const authMiddleware = require("./middleware/auth");



mongoose.connect("mongodb+srv://maestromongologic:hbNwrCZx1ZsDkcwJ@sinan.f9zgtml.mongodb.net/?retryWrites=true&w=majority&appName=sinan")
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err)) 
const app = express();

app.use(express.json());

app.use(cors({
  origin: "*"
}));


app.use("/car", CarRouter); 

app.use(authMiddleware);

app.listen(process.env.PORT || 9000, () => { 
  console.log("Hi, I'm working now!");
});
