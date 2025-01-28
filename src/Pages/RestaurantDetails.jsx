import { useParams } from 'react-router-dom'; // To access the restaurant ID from the URL
import { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantDetails = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [restaurant, setRestaurant] = useState(null); // State to store restaurant details
  const [error, setError] = useState(null); // State to handle errors
   
  console.log("RestaurantDetails component rendered");
  console.log("Restaurant ID from URL:", id);
  useEffect(() => {
    // Fetch the restaurant details when the component mounts or the id changes
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Restaurants/${id}`);
        setRestaurant(response.data); // Store the fetched restaurant data
      } catch (err) {
        console.error("Error fetching restaurant details:", err);
        setError("Failed to fetch restaurant details.");
      }
    };

    if (id) {
      fetchRestaurantDetails(); // Only fetch if there is a valid ID
    }
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>; // Display error message if any
  }

  if (!restaurant) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  return (
    <div className="restaurant-details">
      <h1 className="text-3xl font-bold mb-4">{restaurant.restaurant_name}</h1>
      <img
        src={restaurant.imageUrl || 'https://via.placeholder.com/150'}
        alt={restaurant.restaurant_name}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Description</h2>
        <p>{restaurant.description}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Location</h2>
        <p>{restaurant.location}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Cuisine</h2>
        <p>{restaurant.cuisine}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Operating Hours</h2>
        <p>{`From ${restaurant.starting_time} to ${restaurant.ending_time}`}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Price Range</h2>
        <p>{`$${restaurant.minprice} - $${restaurant.maxprice}`}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Ratings</h2>
        <p>{restaurant.ratings}</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;