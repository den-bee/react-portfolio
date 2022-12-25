import React from 'react';
import styles from "./Home.module.css"
import logo from './logo.svg';

let languageImages : string[] = [
    require("assets/HomePageImages/html.png"),
    require("assets/HomePageImages/css.png"),
    require("assets/HomePageImages/javascript.png"),
    require("assets/HomePageImages/typescript.png"),
    require("assets/HomePageImages/react.png"),
    require("assets/HomePageImages/csharp.png"),
    require("assets/HomePageImages/netcore.png"),
]

const Home = () => {

    return (
        <div className={styles.homePageContainer}>
            <div className={styles.introTextContainer}>
                <p>Hello! My Name is <b>Michiel Baert</b>.</p>
                <p>Welcome to my portfolio made in <b>REACT</b>!<br></br>
                Navigate to the <b>WORKSHOP</b> to take a look<br></br> at some components I made!</p>
            </div>
            <div className={styles.imagesContainer}>
                {languageImages.map((image, index) => <img src={image} key={index} width="100"/>)}
            </div>
        </div>
    )
}

export default Home;