import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from "./AnimalCrossingApp.module.css";
import { LanguageVariant } from 'typescript';

interface AnimalProps {
    species: string;
}

interface Animal {
    id : number;
    name : {
        "name-USen" : string
    }
    "museum-phrase" : string;
    "icon_uri": string
}

let blathers = require("assets/AnimalCrossingAppImages/blathers.png");

const AnimalCrossingData = ({species} : AnimalProps) => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    const loadData = async (name: string) => {
        let result = await fetch(`https://acnhapi.com/v1a/${species}`, {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        let animals : Animal[] = await result.json();
        
        setAnimals(animals);
    }
    useEffect(() => {   
        loadData(species);
    }, []);

    let randomId = Math.floor(Math.random() * animals.length + 1);

    return (
        <div>
            {animals.filter(animal => animal.id === randomId ).map((animal : Animal) => 
            <div>
                <div className={styles.animalCard}>
                    <img src={animal["icon_uri"]}/>
                    <h3>{animal.name["name-USen"]}</h3>
                    <p>{animal["museum-phrase"]}</p>
                </div>
                <div>
                    <button className={styles.loadButton} onClick={(event) => {loadData(species)}}>Load {species}</button>
                </div>
                </div>
            )}
        </div>
    )
}

const AnimalCrossingApp = () => {
    return (
        <Accordion>
            <Accordion.Item className={styles.accordion}  eventKey="7">
                <Accordion.Header as="h3">AnimalCrossingApp</Accordion.Header>
                <Accordion.Body >
                    <div className={styles.introContainer}>
                        <div>
                            <img src={blathers} width="100"/>
                        </div>
                        <div className={styles.introText}>
                            <p>Hello and welcome to my museum! My name is Blathers. Take a look around, press the buttons to get a random fish or bug displayed in the museum. You can even read a description written by yours truly! Enjoy and don't forget to leave a review!</p>
                            <p>Oh and by the way... I'm not a big fan of bugs... just so you know... Yuck!</p>
                        </div>
                    </div>
                    
                    <div className={styles.animalContainer}>
                        <AnimalCrossingData species="fish"/>
                        <AnimalCrossingData species="bugs"/>
                        
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AnimalCrossingApp;