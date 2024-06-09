const express = require("express");
const Car = require("../models/CarModel"); // CarModel'ı kullanacağız
const CarRouter = express.Router();
const tokenControl = require("../middleware/auth");

// Araba kayıt etme fonksiyonu
CarRouter.post("/register", tokenControl, async (req, res) => {
  try {
    let savedCar = await Car.create(req.body); // CarModel kullanarak arabayı oluştur
    res.status(200).send({ status: true, message: `${savedCar.carName} Created` }); // Araba adını kullan
  } catch (error) {
    res.status(404).send({ status: false, message: error.message });
  }
});

// Araba güncelleme fonksiyonu
CarRouter.put("/update/:id", tokenControl, async (req, res) => {
  try {
    let updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true }); // CarModel kullanarak arabayı güncelle
    if (!updatedCar) {
      return res.status(404).send({ status: false, message: "Car not found" });
    }
    res.status(200).send({ status: true, message: `${updatedCar.carName} Updated` }); // Araba adını kullan
  } catch (error) {
    res.status(404).send({ status: false, message: error.message });
  }
});

// Araba silme fonksiyonu
CarRouter.delete("/delete/:id", tokenControl, async (req, res) => {
  try {
    let deletedCar = await Car.findByIdAndDelete(req.params.id); // CarModel kullanarak arabayı sil
    if (!deletedCar) {
      return res.status(404).send({ status: false, message: "Car not found" });
    }
    res.status(200).send({ status: true, message: `${deletedCar.carName} Deleted` }); // Araba adını kullan
  } catch (error) {
    res.status(404).send({ status: false, message: error.message });
  }
});

module.exports = CarRouter;
