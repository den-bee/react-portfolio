import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import styles from "./App.module.css"
import Root from 'components/Root/Root';
import Home from "../Home/Home";
import Work from "../Work/Work";
import Contact from "../Contact/Contact"
import { Outlet,createBrowserRouter, RouterProvider, Route, NavLink, useOutletContext } from 'react-router-dom';
import { ThemeContext, themeSwitch } from 'Context/ThemeContext';



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

  const [theme, setTheme] = useState<string>("light");

  return (
    
    <div style={themeSwitch(theme)}>
      <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <RouterProvider router={router}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
