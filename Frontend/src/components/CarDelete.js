import React, { useState } from 'react';
import axios from 'axios';

function CarDelete() {
  const [carId, setCarId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:9000/car/delete/${carId}`);
      alert(response.data.message);
    } catch (error) {
      alert('Error deleting car');
    }
  };

  return (
    <div>
      <h2>Delete Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="carId">Car ID:</label>
        <input type="text" id="carId" name="carId" value={carId} onChange={(e) => setCarId(e.target.value)} required />

        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default CarDelete;
