import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Restaurants from '../Pages/Restaurants'
import Auth from '../Pages/Auth/Login'
import Auth from '../Pages/Auth/Signup'
import Events from '../Pages/Events'
import Restaurant_owner from '../Pages/Restaurant_owner'

function AppRoutes  () {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Login' element={<Auth />} />
      <Route path='/Signup' element={<Auth />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/Restaurants' element={<Restaurants />}/>
      <Route path='/Restaurant-owner' element={<Restaurant_owner/>}/>

    </Routes>
  );
};

export default AppRoutes;