import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const RestaurantDetails = () => {
  const { id } = useParams(); // Get restaurant ID from the URL
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0); // Local state for user rating
  const [comment, setComment] = useState(""); // Local state for user comment
  const [suggestion, setSuggestion] = useState(""); // Local state for suggestion
  const [userFeedback, setUserFeedback] = useState([]); // State to hold feedback

  // Function to format time to 12-hour format (e.g., 14:30 -> 2:30 PM)
  const formatTimeToHoursAndMinutes = (timeString) => {
    const [time] = timeString.split(".");
    const [hours, minutes] = time.split(":");

    
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; 
    return `${formattedHour}:${minutes} ${period}`;
  };

  // Fetch restaurant details
  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (err) {
        console.error("Error fetching restaurant details:", err);
        setError(err.response?.data?.message || "Failed to fetch restaurant details.");
      }
    };

    if (id) fetchRestaurantDetails();
  }, [id]);

  // Handle form submission
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = { rating, comment, suggestion };
    setUserFeedback((prevFeedback) => [...prevFeedback, newFeedback]);

    // You can send the feedback to the server if needed
    // await axios.post(`/api/feedback`, newFeedback);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Restaurant Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{restaurant.restaurant_name}</h1>
        <img
          src={restaurant.imageUrl || "https://via.placeholder.com/400x300"}
          alt={restaurant.restaurant_name}
          className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg mb-4"
        />
        <div className="text-lg text-gray-600">{restaurant.description || "No description available."}</div>
      </div>

      {/* Restaurant Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p>{restaurant.location || "Location not available"}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Cuisine</h2>
          <p>{restaurant.cuisine || "Cuisine not available"}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Operating Hours</h2>
          <p>
            {`From ${formatTimeToHoursAndMinutes(restaurant.starting_time)} to ${formatTimeToHoursAndMinutes(restaurant.ending_time)}`}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Price Range</h2>
          <p>{`₵${restaurant.minprice} - ${restaurant.maxprice}`}</p>
        </div>
      </div>

      {/* Restaurant Ratings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ratings</h2>
        <ReactStars
          count={5}
          size={24}
          value={restaurant.ratings || 0}
          edit={false} // Display ratings, not editable
          activeColor="#ffd700"
        />
      </div>

      {/* User Feedback Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Leave Your Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2">Rate Your Experience</label>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              onChange={setRating}
              activeColor="#ffd700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Comments</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows="4"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Suggestions</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows="4"
              placeholder="Any suggestions?"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Display Submitted Feedback */}
      <div>
        <h2 className="text-xl font-semibold mb-4">User Feedback</h2>
        <div className="space-y-4">
          {userFeedback.map((feedback, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <ReactStars
                count={5}
                size={24}
                value={feedback.rating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="mt-2">{feedback.comment}</p>
              {feedback.suggestion && <p className="mt-2 text-gray-500 italic">Suggestion: {feedback.suggestion}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
