import React, { useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

function App() {
    const [restaurants, setRestaurants] = useState([]); // Store restaurant data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    // const fetchData = () => {
    //     setLoading(true);
    //     setError(null); // Reset error
    //     axios.get('http://localhost:3000/Restaurants')
    //         .then(response => {
    //             setRestaurants(response.data); // Update state with fetched data
    //             console.log(response.data[0].restaurant_images)
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //             setError('Failed to fetch restaurants. Please try again.');
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // };



    const fetchData = () => {
        setLoading(true);
        setError(null); // Reset error
        axios.get('http://localhost:3000/Restaurants')
            .then(response => {
                // Convert Buffer to Blob and generate Object URL for each restaurant
                const processedData = response.data.map(restaurant => {
                    if (restaurant.restaurant_images && restaurant.restaurant_images.data) {
                        const blob = new Blob([new Uint8Array(restaurant.restaurant_images.data)], { type: 'image/png' });
                        restaurant.imageUrl = URL.createObjectURL(blob); // Add generated URL
                    } else {
                        restaurant.imageUrl = null; // Fallback if no image
                    }
                    return restaurant;
                });
                setRestaurants(processedData); // Update state with processed data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch restaurants. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };
    
    const formatTimeToHoursAndMinutes = (timeString) => {
        const [time] = timeString.split('.'); // Split to remove microseconds
        const [hours, minutes] = time.split(':'); // Split time into hours and minutes
        return `${hours}:${minutes}`; // Return formatted time
    };

    return (
        <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-4">Restaurant Listings</h1>

            {/* Button to fetch data */}
            <button 
                onClick={fetchData} 
                className="primary-btn hover:scale-105 duration-200"
            >
                Display Restaurants
            </button>

            {/* Display Loading, Error, or Restaurant Cards */}
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-6 w-full">
                {restaurants.map((restaurant) => (
                    <JobCard 
                        key={restaurant.restaurant_id} 
                        restaurant={restaurant} 
                        formatTime={formatTimeToHoursAndMinutes} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
