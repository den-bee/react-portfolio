import React, {useContext, useState} from "react";
import { ThemeContext, themeSwitch} from "Context/ThemeContext";
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import styles from "./Root.module.css";



const Root = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
      <div>
        <Header/>
        <NavBar/>
        <Content/>
        <Footer/>
      </div>
  )
}

export default Root;