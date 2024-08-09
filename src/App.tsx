import './theme/index.css'
import './theme/background.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Router } from './Routers/Routers';
import SkyLayout from './layout/Background/SkyLayout';
import InstallPWAButton from './components/common/pwaInstallButton';
import { Fragment } from 'react/jsx-runtime';


const App = () => {
  return (
      <Fragment>
      <RouterProvider router={Router} />
      </Frag>
  );
}

export default App;
