import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantDetails = () => {
  const { id } = useParams(); // Extract the restaurant ID from the route
  const [restaurant, setRestaurant] = useState(null); // State to hold restaurant details
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      if (!id) {
        console.error("Restaurant ID is undefined");
        setError("Invalid restaurant ID.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/Restaurants/${id}`);
        setRestaurant(response.data); // Set restaurant details to state
      } catch (err) {
        console.error("Error fetching restaurant details:", err);
        setError("Failed to fetch restaurant details.");
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>; // Display error message
  }

  if (!restaurant) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <div className="restaurant-details">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>Location: {restaurant.location}</p>
      <p>Price Range: {restaurant.priceRange}</p>
    </div>
  );
};

export default RestaurantDetails;