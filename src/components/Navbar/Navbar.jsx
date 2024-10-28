import React from 'react'
import LogoImg from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className='py-1 bg-zinc-350  shadow-md top-0 left-0 w-full z-10'>
  
      
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
          <li>
            <Link to ='/'>
             <button className='hover:border-b-2 border-primary uppercase'>Home</button>
             </Link>
          </li>
          <li> 
            <Link to='/Events'>
          <button className='hover:border-b-2 border-primary uppercase'>Events</button>
          </Link>
          </li>
          
            
            <li><Link to='/Restaurants'>
            <button className='hover:border-b-2 border-primary uppercase'>Restaurants</button>
            </Link> 
           
            
          </li>
        </ul>
      </div>
       {/* login section  */}
       <div>
        <Link to='/auth'>
        <button className='bg-primary text-white font-bold px-4 py-2 rounded-md'>LOGIN</button>
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Navbar