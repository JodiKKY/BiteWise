import React from 'react';
import Photo from '../assets/register.jpg';
import { Link } from 'react-router-dom';

const RestaurantOwner = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Section: Registration Form */}
      <div className="bg-[#eb760f] w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-16 relative z-10 text-white">
        <h2 className="font-serif font-extrabold text-4xl lg:text-5xl text-center mb-4">Register Your Restaurant</h2>
        <p className="text-lg text-center mb-6">
          Join <span className="font-bold">BiteWise</span> to showcase your restaurant, attract new customers, and grow your business!
        </p>

        <form className="flex flex-col gap-6">
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            name="restaurantName"
            placeholder="Restaurant Name"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            name="address"
            placeholder="Address"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button
            className="bg-white text-orange-500 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-orange-100 transition-all duration-300"
            type="submit"
          >
            Register Now
          </button>
        </form>

        {/* Login Section */}
        <div className="mt-8 text-sm flex justify-center items-center">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="ml-2 border-2 border-white text-white px-5 py-2 rounded-xl hover:bg-white hover:text-orange-500 hover:scale-110 transition-all duration-300 font-semibold">
              Log in
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e77b1d] to-transparent z-20"></div>
        <img
          className="h-full w-full object-cover rounded-l-2xl shadow-xl transition-transform duration-500 hover:scale-105"
          src={Photo}
          alt="Restaurant Registration"
        />
      </div>
    </section>
  );
};

export default RestaurantOwner;