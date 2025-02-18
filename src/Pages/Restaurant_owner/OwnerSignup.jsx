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
    restaurantImage: null,
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle input changes (including file upload)
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { restaurantName, restaurantEmail, restaurantPassword, location, contact, cuisine } = formData;
    
    if (!restaurantName || !restaurantEmail || !restaurantPassword || !location || !contact || !cuisine) {
      setError('All fields are required');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Send data to backend
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/OwnerSignup', {
        method: 'POST',
        body: formDataObj,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Signup successful! Redirecting to login...');
        navigate('/owner-login'); // Redirect to Owner Login
      } else {
        setError(result.error || 'Signup failed. Please try again.');
      }
    } catch (error) {
      setError('Server error. Please try again later.');
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

          {/* Email */}
          <input
            type="email"
            name="restaurantEmail"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Email"
            value={formData.restaurantEmail}
            onChange={handleChange}
          />

          {/* Password */}
          <input
            type="password"
            name="restaurantPassword"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Password"
            value={formData.restaurantPassword}
            onChange={handleChange}
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Restaurant Location"
            value={formData.location}
            onChange={handleChange}
          />

          {/* Contact Number */}
          <input
            type="text"
            name="contact"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Phone Number"
            value={formData.contact}
            onChange={handleChange}
          />

          {/* Cuisine Selection */}
          <select
            name="cuisine"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.cuisine}
            onChange={handleChange}
          >
            <option value="">Select Cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="International">International</option>
            <option value="African">African</option>
            <option value="Continental">Continental</option>
            <option value="Turkish">Turkish</option>
            <option value="Indian">Indian</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Chinese">Chinese</option>
          </select>

          {/* Image Upload (Optional) */}
          <input
            type="file"
            name="restaurantImage"
            accept="image/*"
            className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={handleChange}
          />

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
