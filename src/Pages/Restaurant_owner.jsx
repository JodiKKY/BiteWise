import React from 'react';
import Photo from '../assets/register.jpg';

const Restaurant_owner = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Section: Form */}
      <div className="bg-[#eb760f] w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-10 xl:p-12 relative z-10">
        <h2 className="font-serif font-extrabold text-4xl text-white text-center mb-4">Register Your Restaurant</h2>
        <p className="text-lg text-white text-center mb-6">Join us and showcase your restaurant!</p>

        <form className="flex flex-col gap-6">
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            name="restaurantName"
            placeholder="Restaurant Name"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            name="address"
            placeholder="Address"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <input
            className="p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button
            className="bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-400 hover:scale-105 duration-300 font-semibold shadow-lg focus:outline-none"
            type="submit"
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-sm flex justify-between items-center">
          <p className="text-white">Already have an account?</p>
          <button className="hover:border-2 border-gray-400 text-white bg-orange-500 py-2 px-6 rounded-xl hover:bg-[#003c6b] hover:scale-110 duration-300 font-semibold">
            
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e77b1d] to-transparent rounded-l-2xl z-20"></div>
        <img className="h-full w-full object-cover rounded-l-2xl" src={Photo} alt="restaurant register" />
      </div>
    </section>
  );
}

export default Restaurant_owner;
