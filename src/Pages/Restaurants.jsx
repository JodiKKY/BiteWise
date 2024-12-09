// App.js

import React, { useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

function App() {
    const [restaurants, setRestaurants] = useState([]); // State to store fetched restaurant data

    // Function to fetch restaurant data from the server
    const fetchData = () => {
        axios.get('http://localhost:3000/Restaurants')
            .then(response => {
                setRestaurants(response.data); // Set fetched data into the state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Function to format time (only hours and minutes)
    const formatTimeToHoursAndMinutes = (timeString) => {
        const [time] = timeString.split('.'); // Split to remove microseconds
        const [hours, minutes] = time.split(':'); // Split the time into hours and minutes
        return `${hours}:${minutes}`; // Return formatted time
    };

    return (
        <div className="space-y-6 w-full max-w-4xl">
            <h1 className="text-3xl font-semibold text-center mb-4">Restaurant Listings</h1>
            
            {/* Button to fetch data */}
            <button 
                onClick={fetchData} 
                className="primary-btn hover:scale-105 duration-200"
            >
                Display Restaurants
            </button>

            {/* Display restaurant cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
                {restaurants.map(restaurant => (
                    <JobCard 
                        key={restaurant.restaurant_id} 
                        restaurant={restaurant} 
                        formatTime={formatTimeToHoursAndMinutes} // Pass the function as a prop
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
