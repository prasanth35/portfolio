import './theme/index.css'
import './theme/background.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Router } from './Routers/Routers';
import SkyLayout from './layout/Background/SkyLayout';


const App = () => {
  return (
    <SkyLayout>
      <RouterProvider router={Router} />
    </SkyLayout>
  );
}

export default App;
