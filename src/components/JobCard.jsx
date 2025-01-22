import React, { useEffect, useState } from "react";

function JobCard({ restaurant, formatTime }) {
    // const restaurant_imageUrl = `http://localhost:3000/Restaurants/${restaurant.restaurant_id}/image`;
    // const restaurant_imageUrl = 

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            {/* Display Restaurant Image */}
            <div className="flex justify-center">
                <img
                    src={restaurant.imageUrl}
                    alt={restaurant.restaurant_name || 'Restaurant'}
                    className="w-full h-60 object-cover rounded-lg mb-6"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150"; // Fallback if image not found
                    }}
                />
            </div>

            {/* Restaurant Details */}
            <div className="p-4">
                <h2 className="'font-bold text-black-700 text-[24px] leading-7 mb-1">
                    {restaurant.restaurant_name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{restaurant.location}</p>
                <p className="text-gray-600 dark:text-gray-400">{restaurant.cuisine}</p>
                <p className="text-gray-600 dark:text-gray-400">
                    Hours: {formatTime(restaurant.starting_time)} - {formatTime(restaurant.ending_time)}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                    Price: ${restaurant.minprice} - ${restaurant.maxprice}
                </p>
                
            </div>
        </div>
    );
}


export default JobCard;
