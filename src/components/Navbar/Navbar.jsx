import React from 'react'
import LogoImg from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  // const isLoggedIn = localStorage.getItem("isLoggedIn")

  return (

    
    <div className='py-1 bg-zinc-350  shadow-md top-0 left-0 w-full z-10'>
      <div className='container flex justify-between items-center'>
      <div><Link to ='/'>
       <img src= {LogoImg} alt=""
            className=" img-shadow w-[70px] mx-auto "
          />
        </Link>
      </div>

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
        {
          // isLoggedIn? 
          // <div>
          //   {/* do the profile stuff here. when you log the user out, remove isLoggedIn from localstorage(localstorage.removeItem("isLoggedIn")) */}
          //   Profile
          // </div> :
           <Link to='/login'>
          <button className='bg-primary text-white font-bold px-4 py-2 rounded-md hover:bg-red-600'>LOGIN</button>
          </Link>
        }
       </div>
      </div>
    </div>
  )
}

export default Navbar