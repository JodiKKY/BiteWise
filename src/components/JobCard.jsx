import React from 'react';
function JobCard({ restaurant, formatTime }) {
    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* Display Restaurant Image (if available) */}
            <div className="flex justify-center">
            <img 
    src={`http://localhost:3000/restaurants_images/${restaurant.restaurant_images}`} 
    alt={restaurant.restaurant_name} 
    className="w-full h-40 object-cover rounded-lg mb-4"
/>

            </div>

            <h2 className="text-xl font-semibold mb-2">{restaurant.restaurant_name}</h2>
            <p className="text-gray-600">{restaurant.location}</p>
            <p className="text-gray-600">{restaurant.cuisine}</p>
            <p className="text-gray-600">
                Hours: {formatTime(restaurant.starting_time)} - {formatTime(restaurant.ending_time)}
            </p>
            <p className="text-gray-600">Price: {restaurant.minprice}-{restaurant.maxprice}</p>
        </div>
    );
}

export default JobCard;
