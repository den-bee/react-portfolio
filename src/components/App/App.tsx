import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from 'components/Root/Root';
import NavBar from 'components/NavBar/NavBar';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Work from "../Work/Work";
import Contact from "../Contact/Contact"
import { Outlet,createBrowserRouter, RouterProvider, Route, NavLink } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "Work",
          element: <Work/>
        },
        {
          path: "Contact",
          element: <Contact/>
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
