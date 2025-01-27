import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Restaurants from '../Pages/Restaurants';
import Login from '../Pages/Auth/login';
import Events from '../Pages/Events';
import Signup from '../Pages/Auth/signup';
import RestaurantOwner from '../Pages/Restaurant_owner';
import RestaurantDetails from '../Pages/RestaurantDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/events" element={<Events />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurant_owner" element={<RestaurantOwner />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
    </Routes>
  );
}

export default AppRoutes;