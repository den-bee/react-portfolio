import React, { useContext} from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';
import ThemeButton from 'components/ThemeButton/ThemeButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div>
            <nav>
                 <NavLink className={styles.brandLink} to="/">Michiel Baert</NavLink>
                <div className={styles.navLinkContainer}>
                    <div className={styles.themeButton}>
                        <ThemeButton/>
                    </div>
                    <NavLink className={styles.navLink} to="/">Home</NavLink>
                    <NavLink className={styles.navLink} to="/Work">Workshop</NavLink>
                    <NavLink className={styles.navLink} to="/Contact">Contact</NavLink>
                </div> 
            </nav>
        </div>
    )
}

export default NavBar;