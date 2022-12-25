import React, {useState} from "react";
import { ThemeContext} from "Context/ThemeContext";
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import styles from "./Root.module.css";
import ThemeButton from "components/ThemeButton/ThemeButton";


const Root = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: toggleTheme}}>
      <div className={theme}>
        <Header/>
        <NavBar/>
        <Content/>
        <Footer/>
      </div>
    </ThemeContext.Provider>

  )
}

export default Root;