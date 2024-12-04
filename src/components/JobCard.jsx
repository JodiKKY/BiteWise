
import React from 'react';

const JobCard = ({ restaurant }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white transition-transform duration-200 transform hover:scale-105">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-blue-600">{restaurant.restaurant_name}</h2>
        <p className="text-md text-gray-500 mt-1">{restaurant.location}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-700">Cuisine: {restaurant.cuisine}</p>
        <p className="text-sm text-gray-700">Price: {restaurant.price_range}</p>
        <p className="text-sm text-gray-700">Open: {restaurant.starting_time} - {restaurant.ending_time}</p>
      </div>
    </div>
  );
};

export default JobCard;
