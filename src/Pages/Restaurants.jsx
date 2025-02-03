import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobCard from "../components/JobCard";
import FilterComponent from "../components/FilterComponent";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    applyFilters();
  }, [filters, searchQuery]);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:3000/Restaurants")
      .then((response) => {
        const processedData = response.data.map((restaurant) => {
          if (restaurant.restaurant_images?.data) {
            const blob = new Blob([new Uint8Array(restaurant.restaurant_images.data)], {
              type: "image/png",
            });
            restaurant.imageUrl = URL.createObjectURL(blob);
          } else {
            restaurant.imageUrl = null;
          }
          return restaurant;
        });
        setRestaurants(processedData);
        setFilteredRestaurants(processedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch restaurants. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const applyFilters = () => {
    let filtered = restaurants;

    if (filters.priceRange) {
      filtered = filtered.filter((r) => r.priceRange === filters.priceRange);
    }

    if (filters.cuisine) {
      filtered = filtered.filter((r) =>
        r.cuisine.toLowerCase().includes(filters.cuisine.toLowerCase())
      );
    }

    if (filters.rating) {
      filtered = filtered.filter((r) => r.rating >= parseInt(filters.rating, 10));
    }

    if (searchQuery) {
      filtered = filtered.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRestaurants(filtered);
  };

  const formatTimeToHoursAndMinutes = (timeString) => {
    const [time] = timeString.split(".");
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-6 border-r shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Filters</h2>
        <FilterComponent onFilter={setFilters} />

        <button
          onClick={applyFilters}
          className="w-full mt-4 bg-orange-500 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-300 font-semibold shadow-md"
        >
          Apply Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Discover Restaurants</h1>

          {/* Search Bar */}
          <div className="flex mt-4 md:mt-0 items-center space-x-4">
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for restaurants..."
              className="p-3 border rounded-md w-full md:w-80 shadow-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <button
              onClick={applyFilters}
              className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition-all duration-300 font-semibold shadow-md"
            >
              Search
            </button>
          </div>
        </div>

        {/* Display Restaurants Button */}
        <button
          onClick={fetchData}
          className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition-all duration-300 font-semibold shadow-md mb-6"
        >
          Show Restaurants
        </button>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.restaurant_id}
              onClick={() => navigate(`/restaurant/${restaurant.restaurant_id}`)}
              className="cursor-pointer transform transition duration-500 hover:scale-105"
            >
              <JobCard restaurant={restaurant} formatTime={formatTimeToHoursAndMinutes} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;