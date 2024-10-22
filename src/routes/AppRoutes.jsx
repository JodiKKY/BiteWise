import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Restaurants from '../Pages/Restaurants'
import ProtectedRoutes from './ProtectedRoutes'
import Auth from '../Pages/Auth/auth'
import Events from '../Pages/Events';

function AppRoutes  () {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='../Pages/Auth' element={<Auth />} />
      <Route path='../Pages/Events.jsx' element={<Events />} />
      <Route path='/Restaurants' element={<Restaurants />}/>

      {/* <Route path='app' element={<ProtectedRoutes />}>
        <Route path='jobs' element={<Jobs />} />
        <Route path='jobs/:id' element={<SelectedJob />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;