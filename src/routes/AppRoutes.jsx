import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Restaurants from '../Pages/Restaurants';
import Login from '../Pages/Auth/login';
import Events from '../Pages/Events';
import Signup from '../Pages/Auth/signup';
import OwnerDashboard from '../Pages/Restaurant_owner/OwnerDashboard';
import RestaurantDetails from '../Pages/RestaurantDetails';
import OwnerLogin from '../Pages/Restaurant_owner/ownerlogin';
import OwnerSignup from '../Pages/Restaurant_owner/OwnerSignup';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Restaurants" element={<Restaurants />} />
      <Route path="/OwnerDashboard" element={<OwnerDashboard/>} />
      <Route path="/Restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/OwnerLogin" element={<OwnerLogin />} />
      <Route path="/OwnerSignup" element={<OwnerSignup />} />
    

    </Routes>
  );
}

export default AppRoutes;