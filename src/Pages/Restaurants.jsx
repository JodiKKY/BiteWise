import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import JobCard from '../components/JobCard';
import FilterComponent from '../components/FilterComponent'

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
    axios.get('http://localhost:3000/Restaurants')
      .then(response => {
        const processedData = response.data.map(restaurant => {
          if (restaurant.restaurant_images?.data) {
            const blob = new Blob([new Uint8Array(restaurant.restaurant_images.data)], { type: 'image/png' });
            restaurant.imageUrl = URL.createObjectURL(blob);
          } else {
            restaurant.imageUrl = null;
          }
          return restaurant;
        });
        setRestaurants(processedData);
        setFilteredRestaurants(processedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch restaurants. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  const applyFilters = () => {
    let filtered = restaurants;

    if (filters.priceRange) {
      filtered = filtered.filter(r => r.priceRange === filters.priceRange);
    }

    if (filters.cuisine) {
      filtered = filtered.filter(r => r.cuisine.toLowerCase() === filters.cuisine.toLowerCase());
    }

    if (filters.rating) {
      filtered = filtered.filter(r => r.rating >= parseInt(filters.rating, 10));
    }

    if (searchQuery) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRestaurants(filtered);
  };

  const formatTimeToHoursAndMinutes = (timeString) => {
    const [time] = timeString.split('.');
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <FilterComponent onFilter={setFilters} />
         
        <button
          onClick={applyFilters}
          className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Apply Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Restaurants</h1>
        
        {/* Display Restaurants Button */}
        <button
          onClick={fetchData}
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mb-6"
        >
          Display Restaurants
        </button>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurants.map(restaurant => (
            <div
              key={restaurant.restaurant_id}
              onClick={() => navigate(`/restaurant/${restaurant.restaurant_id}`)}
              className="cursor-pointer"
            >
              <JobCard
                restaurant={restaurant}
                formatTime={formatTimeToHoursAndMinutes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
