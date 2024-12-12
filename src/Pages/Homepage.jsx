import React from "react";
import HeroImg from "../assets/waakye3.png";
import Flow1 from "../assets/flow1.png";
import { Link } from "react-router-dom";
import Bg1 from '../assets/background.png';


const Homepage = () => {
  return (
    <div>
      <div className="container min-h-[600px] flex items-center justify-center text-white"
        style={{
        backgroundImage: `url(${Bg1})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-opacity-0 bg-black p-10 rounded-md">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-8 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-semibold">
              Delicious Food Is Waiting For You
            </h1>
            <p className="font-semibold text-xl md:text-2xl">
              Welcome to Bite<span className="text-orange-500">Wise</span>.
              Discover a world of culinary delights as you explore a diverse
              selection of restaurants, their menus, and pricing. Share your
              experiences by reviewing dishes and offering your favorite food
              combo suggestions. Join our community of food lovers and make
              every meal a memorable one! Happy dining!
            </p>
            <div className="flex gap-4 items-center md:justify-start justify-center">
              <Link to="/Restaurants">
                <button
                  className="primary-btn hover:scale-105 duration-200"
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
              className="animate-spin img-shadow w-[300px] md:w-[400px] mx-auto"
              src={HeroImg}
              alt="Hero Banner"
            />
          </div>
        </div>
      </div>

      {/* Partner Section */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] bg-orange-500">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold text-white">
            Become a partner and know your audience
          </h1>
          <p className="font-semibold">
            Join our platform to showcase your restaurant’s delicious meals and
            unique ambiance! Attract new customers with stunning visuals,
            receive valuable reviews and suggestions, and expand your reach to
            food lovers eager to discover your culinary creations. Sign up
            today and grow your business!
          </p>
          <Link to="/Restaurant-owner">
            <button className="secondary-btn hover:scale-105 duration-200 items-center md:justify-start justify-center">
              Join us
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center">
          <img
            className="img-shadow w-[400px] mx-auto"
            src={Flow1}
            alt="Partner Section Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
