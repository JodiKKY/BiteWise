import React from "react";
import { useNavigate } from "react-router-dom";

function JobCard({ restaurant, formatTime }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("Navigating to restaurant with ID:", restaurant.restaurant_id);
    if (restaurant.restaurant_id) {
      navigate(`/restaurant/${restaurant.restaurant_id}`);
    } else {
      console.error("Restaurant ID is undefined");
    }
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
      onClick={handleCardClick}
    >
      {/* Restaurant Image */}
      <div className="relative w-full h-60">
        <img
          src={restaurant.imageUrl || "https://via.placeholder.com/300"}
          alt={restaurant.restaurant_name || "Restaurant"}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
        />
        {/* Cuisine Tag */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-md">
          {restaurant.cuisine || "Various"}
        </span>
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        <h2 className="font-bold text-gray-900 text-lg truncate">{restaurant.restaurant_name || "Restaurant Name"}</h2>
        <p className="text-gray-600 text-sm">{restaurant.location || "Unknown Location"}</p>

        {/* Hours */}
        <p className="text-gray-500 text-sm mt-3">
          ⏰ {restaurant.starting_time ? formatTime(restaurant.starting_time) : "N/A"} - {restaurant.ending_time ? formatTime(restaurant.ending_time) : "N/A"}
        </p>

        {/* Price on a Separate Line */}
        <p className="text-gray-700 font-semibold text-sm mt-2">
        ₵{restaurant.minprice ? `${restaurant.minprice}` : "?"} - {restaurant.maxprice ? `${restaurant.maxprice}` : "?"}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ⭐ {restaurant.ratings ? restaurant.ratings.toFixed(1) : "N/A"}
          </span>
          <p className="text-gray-500 text-xs ml-2">{restaurant.ratings ? "Rated" : "No Ratings Yet"}</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;