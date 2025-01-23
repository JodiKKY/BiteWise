import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RestaurantDetails() {
    const { id } = useParams(); // Get the restaurant ID from the URL
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [id]);

    const fetchRestaurantDetails = () => {
        setLoading(true);
        setError(null);

        axios.get(`http://localhost:3000/Restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurant details:', error);
                setError('Failed to fetch restaurant details.');
            })
            .finally(() => setLoading(false));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!restaurant) return <p>No restaurant found.</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold">{restaurant.restaurant_name}</h1>
            <img
                src={restaurant.imageUrl || 'https://via.placeholder.com/150'}
                alt={restaurant.restaurant_name}
                className="w-full h-60 object-cover rounded-lg my-4"
            />
            <p><strong>Location:</strong> {restaurant.location}</p>
            <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
            <p>
                <strong>Hours:</strong> {restaurant.starting_time} - {restaurant.ending_time}
            </p>
            <p>
                <strong>Price:</strong> ${restaurant.minprice} - ${restaurant.maxprice}
            </p>
            <p><strong>Rating:</strong> {restaurant.ratings}/5</p>
        </div>
    );
}

export default RestaurantDetails;
