// import React from 'react'
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// // import Auth from './components/Auth/auth';
import AppRoutes from './routes/AppRoutes'; // Adjust the path as necessary
import BgImage from './assets/1.png'

// const bgStyle ={ 
// backgroundImage: URL(BgImage),
// backgroundRepeat: 'no repeat',
// backgroundSize:'cover',
// backgroundPosition:'center'
// }
function App() {
  return (
    <div className='overflow-x-hidden'>
      {/* <div className='min-h-screen bg-white/50 backdrop-blur-3xl '> */}
     <AppRoutes/>
      </div>
  );
}

export default App