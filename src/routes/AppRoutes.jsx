import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Restaurants from '../Pages/Restaurants';
import Login from '../Pages/Auth/login';
import Events from '../Pages/Events';
import Signup from '../Pages/Auth/signup';
import RestaurantOwner from '../Pages/Restaurant_owner';
import RestaurantDetails from '../Pages/RestaurantDetails';
import Ownerlogin from '../Pages/Auth/Ownerlogin';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Restaurants" element={<Restaurants />} />
      <Route path="/Restaurant_owner" element={<RestaurantOwner />} />
      <Route path="/Restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/Ownerlogin" element={<Ownerlogin/>} />

    </Routes>
  );
}

export default AppRoutes;