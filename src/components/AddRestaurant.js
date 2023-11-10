// src/components/AddRestaurant.js
import React, { useState } from 'react';
import axios from 'axios';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleAddRestaurant = async () => {
    try {
      const response = await axios.post('http://localhost:3001/restaurant', {
        name,
        address,
        contact,
      });

      console.log('Restaurant added:', response.data);

      setName('');
      setAddress('');
      setContact('');
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Add New Restaurant</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>Contact:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />

        <button type="button" onClick={handleAddRestaurant}>
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
