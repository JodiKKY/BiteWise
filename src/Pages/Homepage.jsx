import React from "react";
import HeroImg from "../assets/waakye3.png";
import Flow1 from "../assets/flow1.png";
import { Link } from "react-router-dom";
import Bg1 from '../assets/background.png';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="container min-h-screen flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay for better contrast */}
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 rounded-md max-w-6xl">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-6 text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-orange-500">Delicious</span> Food Is <br /> Waiting For You
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
              Welcome to <span className="text-orange-500 font-bold">BiteWise</span>. Discover a world of culinary delights as you explore diverse restaurants, their menus, and pricing.
              Share your experiences, review dishes, and suggest food combos. Join our community of food lovers and elevate your dining experience!
            </p>
            <div className="flex gap-4 items-center md:justify-start justify-center">
              <Link to="/Restaurants">
                <button
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
                  aria-label="Explore Restaurants"
                >
                  Explore Restaurants
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col justify-center">
            <img
              className="animate-spin img-shadow w-[500px] md:w-[500px] mx-auto"
              src={HeroImg}
              alt="Hero Banner"
            />
          </div>
        </div>
      </div>

      {/* Partner Section */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[600px] bg-orange-500 p-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 text-center md:text-left text-white">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Become a <span className="text-black">Partner</span> and <br /> Know Your Audience
          </h1>
          <p className="text-lg leading-relaxed">
            Join our platform to showcase your restaurant’s delicious meals and unique ambiance! Attract new customers with stunning visuals, receive valuable reviews, and expand your reach. 
            Sign up today and grow your business!
          </p>
          <Link to="/Restaurant_owner">
            <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg">
              Join Us
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="img-shadow w-[400px] mx-auto transform transition-all duration-500 hover:scale-110"
            src={Flow1}
            alt="Partner Section Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
            