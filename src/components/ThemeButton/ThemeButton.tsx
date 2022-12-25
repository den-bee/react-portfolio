import {useState} from "react";
import styles from "./ThemeButton.module.css"

const ThemeButton = () => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }
    
    return (
        <div>
            <button onChange={toggleTheme} className={styles.switch}></button>
        </div>
    )
}

export default ThemeButton;