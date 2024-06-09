const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
    carName: {
        type: String,
        required: [true, 'araba ismi gereklidir'],// carName alanini zorunlu hale getir
    },
    carModel: {
        type: String,
        required: [true, 'araba modeli gereklidir'], // carModel alanini zorunlu hale getir
    },
    year: {
        type: Number,
    }
});

const Car = model('Car', CarSchema);
module.exports = Car;
