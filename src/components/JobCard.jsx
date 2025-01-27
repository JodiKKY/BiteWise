import React from "react";
import { useNavigate } from "react-router-dom";

function JobCard({ restaurant, formatTime }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/Restaurants/${restaurant.restaurant_id}`);
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Display Restaurant Image */}
      <div className="flex justify-center">
        <img
          src={restaurant.imageUrl || "https://via.placeholder.com/150"}
          alt={restaurant.restaurant_name || "Restaurant"}
          className="w-full h-60 object-cover mb-4"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150"; // Fallback if image is not found
          }}
        />
      </div>

      {/* Restaurant Details */}
      <div className="p-4">
        <h2 className="font-bold text-black-700 text-lg mb-1">
          {restaurant.restaurant_name || "Unknown Restaurant"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {restaurant.location || "Location not available"}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {restaurant.cuisine || "Cuisine not specified"}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Hours:{" "}
          {restaurant.starting_time && restaurant.ending_time
            ? `${formatTime(restaurant.starting_time)} - ${formatTime(restaurant.ending_time)}`
            : "Hours not specified"}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Price:{" "}
          {restaurant.minprice && restaurant.maxprice
            ? `$${restaurant.minprice} - $${restaurant.maxprice}`
            : "Price range not available"}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Ratings: {restaurant.ratings || "No ratings yet"}
        </p>
      </div>
    </div>
  );
}

export default JobCard;