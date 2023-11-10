// src/components/UpdateRestaurant.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateRestaurant = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleUpdateRestaurant = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/restaurant-update/${id}`, {
        name,
        address,
        contact,
      });

      console.log('Restaurant updated:', response.data);

      // After updating the restaurant, you can clear the form
      setId('');
      setName('');
      setAddress('');
      setContact('');
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Update Restaurant</h2>
      <form>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>Contact:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />

        <button type="button" onClick={handleUpdateRestaurant}>
          Update Restaurant
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
