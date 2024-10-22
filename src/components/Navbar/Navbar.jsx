import React from 'react'
import LogoImg from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='py-4'>
      <div className='container flex justify-between items-center'>
      {/* logo section */}
      <div>
      
       <img src= {LogoImg} alt=""
            className=" img-shadow w-[70px] mx-auto "
          />
        
      </div>
      {/* Menu section */}

      <div className='flex justify-center items-center gap-6'>
        <ul className='gap-8 hidden sm:flex'>
          <li> <button className='hover:border-b-2 border-primary uppercase'>Home</button>
          </li>
          <li> <button className='hover:border-b-2 border-primary uppercase'>Events</button>
          </li>
            <li><Link to='/Restaurants'>
            <button className='hover:border-b-2 border-primary uppercase'>Restaurants</button>
            </Link> 
           
            
          </li>
        </ul>
      </div>
       {/* login section  */}
       <div>
        <button className='bg-primary text-white font-bold px-4 py-2 rounded-md'>LOGIN</button>
       </div>
      </div>
    </div>
  )
}

export default Navbar