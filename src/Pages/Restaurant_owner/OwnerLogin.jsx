import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Ownerbg from '../../assets/owner.png'; 

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();  

  // Simulated API call (Replace with actual API call in production)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Form Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Simulating API Request (replace this with your real API)
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulating a successful login for specific credentials
          if (email === 'owner@restaurant.com' && password === 'password123') {
            resolve({ success: true });
          } else {
            reject({ message: 'Invalid email or password' });
          }
        }, 2000);
      });

      if (response.success) {
        alert('Login successful!');
        navigate('/dashboard');  // Redirect to the restaurant owner dashboard
      }
    } catch (err) {
      setError(err.message || 'An error occurred, please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="min-h-screen flex justify-center items-center p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${Ownerbg})` }} // Set Ownerb as the background
    >
      <div className="w-full max-w-md p-8 bg-[#f9f9f9] bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6">Restaurant Owner Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              className="p-4 rounded-xl border border-gray-300 shadow-sm w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 disabled:bg-gray-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-4 text-center text-sm">
          <p>Don't have an account?</p>
          <Link to="/OwnerSignup">
            <button className="text-orange-500 hover:underline font-semibold">Register Here</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnerLogin;
