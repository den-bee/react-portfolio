import { ThemeContext, themeSwitch} from "Context/ThemeContext";
import {useState, useContext} from "react";

import styles from "./ThemeButton.module.css"

let lightImage = require("assets/NavBarImages/lights.png")

const ThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    
    return (
        <div>
            <a href="#"><img onClick={() => setTheme(theme === "light" ? "dark" : "light")} src={lightImage} width="30"/></a>
        </div>
    )
}

export default ThemeButton;