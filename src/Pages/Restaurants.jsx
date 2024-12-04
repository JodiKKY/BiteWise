// App.js
import React, { useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

function App() {
    const [restaurants, setRestaurants] = useState([]); // State to hold fetched restaurant data

    const fetchData = () => {
        axios.get('http://localhost:3000/Restaurants')
            .then(response => {
                setRestaurants(response.data); // Set the fetched data into state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="space-y-6 w-full max-w-4xl">
                <h1 className="text-3xl font-semibold text-center mb-4">Restaurant Listings</h1>
                <button onClick={fetchData} className="primary-btn hover:scale-105 duration-200">
                    Display Restaurants
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {restaurants.map(restaurant => (
                        <JobCard key={restaurant.restaurant_id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        // </div>
    );
}

export default App;
