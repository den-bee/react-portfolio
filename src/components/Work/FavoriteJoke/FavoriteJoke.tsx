import React from 'react';
import logo from './logo.svg';
import {useEffect} from "react";
import {useState} from "react";
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
        <div>
            <Jokes/>
        </div>
    )
}

export default JokesApp;