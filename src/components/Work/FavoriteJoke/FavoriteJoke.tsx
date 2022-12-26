import React from 'react';
import logo from './logo.svg';
import {useEffect} from "react";
import {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import styles from "./FavoriteJoke.module.css";

interface Joke {
    id: string;
    joke: string;
    status: number;
}

const Jokes = () => {
    const [joke, setJoke] = useState("");
    const [favoriteJoke, setFavoriteJoke] = useState(localStorage.getItem("favoriteJoke") ?? "");

    const loadJoke = async() => {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });
        let joke : Joke = await response.json();

        setJoke(joke.joke);
    }

    const setFavorite = () => {
        setFavoriteJoke(joke);
    }

    useEffect(() => {
        localStorage.setItem("favoriteJoke", favoriteJoke);
    }, [favoriteJoke]);

    useEffect(() => {
        loadJoke();
    }, []);

    return (
        <div className={styles.card}>
            <b>Random joke:</b>
            <div>{joke}</div>
            <div>
                <button onClick={setFavorite}>Set favorite</button>
                <button onClick={loadJoke}>New Joke</button>
            </div>
            {favoriteJoke && (
                <div className={styles.card}>
                    <b>Favorite Joke:</b>
                    <div>{favoriteJoke}</div>
                </div>
            )}
        </div>
    )
}

const JokesApp = () => {
    return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="5" className={styles.accordion}>
        <Accordion.Header as="h3">JokesApp</Accordion.Header>
          <Accordion.Body>
            <p>You're in a bar with your colleagues and you want to make an impression. I got the app for you! Use this Joke App to get a random joke, tell it to your colleagues and become the most populair guy in town!</p>
            <Jokes/>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
}

export default JokesApp;