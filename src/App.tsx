import './theme/index.css'
import './theme/background.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Router } from './Routers/Routers';
import SkyLayout from './layout/Background/SkyLayout';
import InstallPWAButton from './components/common/pwaInstallButton';


const App = () => {
  return (
      <>
      <InstallPWAButton/>
      <RouterProvider router={Router} />
      </>
  );
}

export default App;
