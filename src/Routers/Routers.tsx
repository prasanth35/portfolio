import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "../layout/Navbar/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Project";
import { Resume } from "../pages/Resume";


const  NavbarWrapper = () => {
  return (
  <>
      <NavBar />
      <Outlet />
  </>
  )
};

export const Router = createBrowserRouter([
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