import React from "react";
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Root;