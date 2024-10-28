import React from 'react'
import HeroImg from "../assets/waakye3.png"
import { Link } from 'react-router-dom';
import Flow1 from '../assets/flow1.png'
const homepage = () => {
    return (
    <div>
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] ">
      {/* text section */}
      <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Delicious Food Is Waiting For You
        </h1>
        <p className="font-semibold">
        Welcome to Bite<span className='text-orange-500'>Wise</span>.Discover a world of culinary delights as you explore a diverse selection of restaurants, their menus, and pricing. Share your experiences by reviewing dishes and offering your favorite food combo suggestions. Join our community of food lovers and make every meal a memorable one! Happy dining!
        </p>
        
        <div className="flex gap-4 items-center md:justify-start justify-center">
        <Link to = '/Restaurants'>
          <button className="primary-btn hover:scale-105 duration-200">
            Explore Restaurants
          </button>
          </Link>
        </div>
       
      </div>
      {/* image section */}
      <div className="flex flex-col justify-center">
        <img
          src={HeroImg}
          alt=""
          className="animate-spin img-shadow w-[400px] mx-auto "
        />
      </div>
    </div>
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] bg-orange-500">
    <div className="flex flex-col justify-center gap-8 text-center md:text- pt-24 md:p-0 pb-10">
        <h1 className="text-4xl lg:text-6xl font-semibold  text-white">
        Become a partner and know your audience
        </h1>
        <p className="font-semibold">
        Join our platform to showcase your restaurant’s delicious meals and unique ambiance! Attract new customers with stunning visuals, receive valuable reviews and suggestions, and expand your reach to food lovers eager to discover your culinary creations. Sign up today and grow your business!</p>
        
       
        <Link to = '/Restaurant-owner'>
          <button className="secondary-btn hover:scale-105 duration-200  items-center md:justify-start justify-center">
           Join us
          </button>
          </Link>
     </div>
        <img
          src={Flow1}
          alt=""
          className=" img-shadow w-[400px] mx-auto "
        />   
        </div>
        
</div>
);
};

export default homepage

