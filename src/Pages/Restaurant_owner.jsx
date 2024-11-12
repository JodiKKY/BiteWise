import React from 'react';
import Photo from '../assets/register.jpg';

const Restaurant_owner = () => {
  return (
    <section className="bg-white min-h-screen flex">
      <div className="bg-[#eb760f] w-1/2 flex flex-col justify-center p-5 relative z-10">
        <h2 className="font-bold text-3xl text-white text-center font-serif">Register Your Restaurant</h2>
        <p className="text-sm mt-4 text-black">Join us and showcase your restaurant!</p>

        <form action="" className="flex flex-col gap-4">
          <input className="p-2 mt-8 rounded-xl border" type="text" name="restaurantName" placeholder="Restaurant Name" required />
          <input className="p-2 rounded-xl border" type="text" name="address" placeholder="Address" required />
          <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" required />
          <input className="p-2 rounded-xl border" type="tel" name="phone" placeholder="Phone Number" required />
          <input className="p-2 rounded-xl border" type="password" name="password" placeholder="Password" required />

          <button className="bg-orange-500 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-orange-400 font-medium" type="submit">Register</button>
        </form>

        <div className="mt-10 text-sm flex justify-between items-center">
          <p className="mr-3 md:mr-0">Already have an account?</p>
          <button className="hover:border register text-white bg-orange-500 hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">Login</button>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e77b1d] to-transparent rounded-l-2xl z-20"></div>
        <img className=" h-full object-cover" src={Photo} alt="register form image" />
    </div>
    </section>
  );
}

export default Restaurant_owner;