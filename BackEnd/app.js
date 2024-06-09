const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const CarRouter = require("./router/CarRouter");

const authMiddleware = require("./middleware/auth");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// Araba routeri
app.use("/car", CarRouter);

// App dinleme
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Hi, I'm working now!");
});
