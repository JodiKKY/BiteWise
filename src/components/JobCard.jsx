import React, { useEffect, useState } from "react";

function JobCard({ restaurant, formatTime }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Fetch the image from the server
    if (restaurant.restaurant_id) {
      const fetchImage = async () => {
        try {
          const response = await fetch(`http://localhost:3000/Restaurants/${restaurant.restaurant_id}/image`);
          if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImageUrl(url);
          } else {
            console.error("Failed to fetch image:", response.statusText);
          }
        } catch (err) {
          console.error("Error fetching image:", err);
        }
      };

      fetchImage();
    }
  }, [restaurant.restaurant_id]);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Display Restaurant Image */}
      <div className="flex justify-center">
        <img
          src={imageUrl || "https://via.placeholder.com/150"} // Fallback image
          alt={restaurant.restaurant_name || "Restaurant"}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      </div>

      {/* Restaurant Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
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
