import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Restaurants from '../Pages/Restaurants'
import ProtectedRoutes from './ProtectedRoutes'
import Auth from '../Pages/Auth/auth'
import Events from '../Pages/Events'
import Restaurant_owner from '../Pages/Restaurant_owner'

function AppRoutes  () {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/Restaurants' element={<Restaurants />}/>
      <Route path='/Restaurant-owner' element={<Restaurant_owner/>}/>

     
    </Routes>
  );
};

export default AppRoutes;