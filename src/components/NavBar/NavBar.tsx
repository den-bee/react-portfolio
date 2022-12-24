import React from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink className={styles.brandLink} to="/">Michiel Baert</NavLink>
                <NavLink className={styles.navLink} to="/">Home</NavLink>
                <NavLink className={styles.navLink} to="/Work">Work</NavLink>
                <NavLink className={styles.navLink} to="/Contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;