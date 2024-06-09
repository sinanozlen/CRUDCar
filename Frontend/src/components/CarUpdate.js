import React, { useState } from 'react';
import axios from 'axios';

function CarUpdate() {
  const [carId, setCarId] = useState('');
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
      const response = await axios.put(`http://localhost:9000/car/update/${carId}`, car);
      alert(response.data.message);
    } catch (error) {
      alert('Error updating car');
    }
  };

  return (
    <div>
      <h2>Update Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="carId">Car ID:</label>
        <input type="text" id="carId" name="carId" value={carId} onChange={(e) => setCarId(e.target.value)} required />

        <label htmlFor="carName">Car Name:</label>
        <input type="text" id="carName" name="carName" value={car.carName} onChange={handleChange} required />

        <label htmlFor="carModel">Car Model:</label>
        <input type="text" id="carModel" name="carModel" value={car.carModel} onChange={handleChange} required />

        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" value={car.year} onChange={handleChange} required />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CarUpdate;
