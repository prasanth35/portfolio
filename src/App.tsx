import React from 'react';
import './theme/index.css'
import Home from './modules/Home';
import './theme/background.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SkyLayout from './Common/Layout/SkyLayout';
import NavBar from './Common/Layout/NavBar';
import About from './modules/About';
import Projects from './modules/Project';
import Resume from './modules/Resume';


const  NavbarWrapper = () => {
  return (
  <>
      <NavBar />
      <Outlet/>
  </>
  )
};



const router = createBrowserRouter([
  {
      path : '/',
      element : <NavbarWrapper/> ,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/about',
          element : <About/>
        },
        {
          path : '/projects',
          element : <Projects/>
        },
        {
          path : '/resume',
          element : <Resume/>
        } 
      ]
  },  
],{basename: "/"} )

const  App = () =>  {
  return (
    <SkyLayout>
    <RouterProvider router={router} />
    </SkyLayout>

  );
}

export default App;
