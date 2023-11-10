// src/components/DeleteRestaurant.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteRestaurant = () => {
  const [id, setId] = useState('');

  const handleDeleteRestaurant = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/restaurant-delete/${id}`);

      console.log('Restaurant deleted:', response.data);

      // After deleting the restaurant, you can clear the form
      setId('');
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Delete Restaurant</h2>
      <form>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <button type="button" onClick={handleDeleteRestaurant}>
          Delete Restaurant
        </button>
      </form>
    </div>
  );
};

export default DeleteRestaurant;
