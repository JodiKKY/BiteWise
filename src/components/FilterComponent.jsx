import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FilterComponent = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState(0);

  const handleFilter = () => {
    onFilter({ priceRange, cuisine, rating });
  };

  const handleReset = () => {
    setPriceRange("");
    setCuisine("");
    setRating(0);
    onFilter({ priceRange: "", cuisine: "", rating: 0 });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
      
      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All</option>
          <option value="low">Low ($)</option>
          <option value="medium">Medium ($$)</option>
          <option value="high">High ($$$)</option>
        </select>
      </div>

      {/* Cuisine */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cuisine
        </label>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
          <option value="indian">Indian</option>
          <option value="american">American</option>
        </select>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rating
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${
                star <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Reset
        </button>
        
      </div>

      {/* Selected Filters Preview */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
        <h3 className="text-md font-semibold mb-2">Selected Filters:</h3>
        <p><strong>Price Range:</strong> {priceRange || "All"}</p>
        <p><strong>Cuisine:</strong> {cuisine || "All"}</p>
        <p><strong>Rating:</strong> {rating > 0 ? `${rating} Star${rating > 1 ? "s" : ""}` : "All"}</p>
      </div>
    </div>
  );
};

export default FilterComponent;
