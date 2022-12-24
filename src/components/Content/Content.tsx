import React from 'react';
import {Outlet} from "react-router-dom";
import styles from "./Content.module.css";
import logo from './logo.svg';

const Content = () => {
    return (
        <main className={styles.main}>
            <Outlet/>
        </main>
        
    )
}

export default Content;