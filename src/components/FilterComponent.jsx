import React, { useState } from "react";

const FilterComponent = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    onFilter({ priceRange, cuisine, rating });
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
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      {/* Filter Button */}
      {/* <button
        onClick={handleFilter}
      className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
      Apply Filters
    </button> */}
    </div>
  );
};

export default FilterComponent;
