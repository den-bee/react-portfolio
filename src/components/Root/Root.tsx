import React, {useState} from "react";
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import styles from "./Root.module.css";
import { ThemeContext } from "Context/DataContext";

const Root = () => {
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