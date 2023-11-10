import React from 'react';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant';
import DeleteRestaurant from './components/DeleteRestaurant';

function App() {
  return (
    <div>
      <RestaurantList />
      <AddRestaurant />
      <UpdateRestaurant />
      <DeleteRestaurant />
    </div>
  );
}

export default App;
