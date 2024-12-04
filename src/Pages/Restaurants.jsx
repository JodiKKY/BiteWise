import React, { useState } from 'react';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDisplayClick = async () => {
    setLoading(true); 
    setError(null);    // Reset any previous errors

    try {
    
      // const response = await axios.get('http://localhost:3000');
      
      if (response.status === 200) {
        setRestaurants(response.data); // Set the restaurants data from the response
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
     console.log('Hello')
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      <button
        className="bg-orange-500 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-orange-400 font-medium"
        type="button"
        onClick={handleDisplayClick}
      >
        Display
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display the restaurants data in a table */}
      {restaurants.length > 0 && (
        <table>
          {/* <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Rating</th>
            </tr>
          </thead> */}
          {/* <tbody>
            {restaurants.map((restaurant, index) => (
              <tr key={index}>
                <td>{restaurant.id}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{restaurant.rating}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      )}
    </div>
  );
};

export default Restaurants;
