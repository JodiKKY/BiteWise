import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Ownerbg from '../../assets/owner.png'; 

const OwnerSignup = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantEmail: '',
    restaurantPassword: '',
    location: '',
    contact: '',
    cuisine: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    const { restaurantName, restaurantEmail, restaurantPassword, location,contact, cuisine } = formData;
    if (!restaurantName || !restaurantEmail || !restaurantPassword|| !location || !contact || !cuisine) {
      setError('All fields are required');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Simulated API Request (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert('Signup successful! You can now log in.');
      navigate('/owner-login');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="min-h-screen flex justify-center items-center p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${Ownerbg})` }}
    >
      <div className="w-full max-w-lg p-8 bg-[#f9f9f9] bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6">Restaurant Owner Signup</h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Restaurant Name */}
          <input
            type="text"
            name="restaurantName"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Restaurant Name"
            value={formData.restaurantName}
            onChange={handleChange}
          />
         
          
         <input type="email" name="restaurantEmail"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Email" value={formData.email}
            onChange={handleChange}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Restaurant Location"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Category Selection */}
          <select
            name="Cuisine"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Cuisine</option>
            <option value="Italian">Itailian</option>
            <option value="Fine Dining">Fine Dining</option>
            <option value="Cafe">Cafe</option>
            <option value="Buffet">Buffet</option>
            <option value="Casual Dining">Casual Dining</option>
          </select>


          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 disabled:bg-gray-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {/* Already have an account? */}
        <div className="mt-4 text-center text-sm">
          <p>Already have an account?</p>
          <Link to="/OwnerLogin">
            <button className="text-orange-500 hover:underline font-semibold">Login Here</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnerSignup;
