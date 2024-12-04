import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Restaurants from '../Pages/Restaurants'
import Login from '../Pages/Auth/login'
import Events from '../Pages/Events'
import Signup from '../Pages/Auth/signup'
import Restaurant_owner from '../Pages/Restaurant_owner'


function AppRoutes  () {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/Restaurants' element={<Restaurants />}/>
      <Route path='/Restaurant-owner' element={<Restaurant_owner/>}/>
     </Routes>
  );
};

export default AppRoutes;

