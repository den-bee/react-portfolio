import React from 'react';
import styles from "./Home.module.css"
import logo from './logo.svg';


const Home = () => {

    return (
        <div className={styles.homePageContainer}>
            <div className={styles.introTextContainer}>
                <p><b>Hello!</b> My name is <b>Michiel Baert</b>.</p>
                <p>Welcome to my portfolio made in <b>REACT</b>!<br></br>
                Walk over to the <b>WORKSHOP</b> to get a look<br></br> at some components I made!</p>
            </div>
        </div>
    )
}

export default Home;