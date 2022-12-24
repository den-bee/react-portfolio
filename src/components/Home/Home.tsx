import React from 'react';
import styles from "./Home.module.css"
import logo from './logo.svg';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <p>Hello! My Name is <b>Michiel Baert</b></p>
            <p>Welcome to my portfolio made in <b>REACT</b>!<br></br>
            You can navigate to the <b>WORKSHOP</b> to take a look<br></br> at some of the components I made</p>
        </div>
    )
}

export default Home;