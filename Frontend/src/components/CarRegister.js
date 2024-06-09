import React, { useState } from 'react';
import axios from 'axios';

function CarRegister() {
  const [car, setCar] = useState({
    carName: '',
    carModel: '',
    year: ''
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/car/register', car);
      alert(response.data.message);
    } catch (error) {
      alert('Error registering car');
    }
  };

  return (
    <div>
      <h2>Register Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="carName">Car Name:</label>
        <input type="text" id="carName" name="carName" value={car.carName} onChange={handleChange} required />

        <label htmlFor="carModel">Car Model:</label>
        <input type="text" id="carModel" name="carModel" value={car.carModel} onChange={handleChange} required />

        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" value={car.year} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default CarRegister;
