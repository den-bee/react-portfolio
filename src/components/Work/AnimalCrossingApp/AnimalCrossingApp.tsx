import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import Accordion from 'react-bootstrap/Accordion';
import styles from "./AnimalCrossingApp.module.css";

interface AnimalProps {
    name: string;
}

interface Animal {
    id : number;
    "file-name" : string;
    "museum-phrase" : string;
    "icon_uri": string
}


interface AnimalData {
    results: Animal[]
}


const AnimalCrossingData = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        let result = await fetch(`https://acnhapi.com/v1a/fish/{}`, {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        let animalData : AnimalData = await result.json();
        
        setAnimals(animalData.results);
        setLoading(false);
    }
    useEffect(() => {   
        loadData();
    }, []);

    return (
        <div>
            {loading && <LoadingIndicator/>}
            {animals.map((animal : Animal) => 
                <ul key={animal.id}>
                    <li>{animal['file-name']}</li>
                    <li>{animal['museum-phrase']}</li>
                    <li>{animal['icon_uri']}</li>
                </ul>
            )}
        </div>
    )
}

const AnimalCrossingApp = () => {
    return (
        <Accordion>
            <Accordion.Item className={styles.accordion}  eventKey="7">
                <Accordion.Header as="h3">AnimalCrossingApp</Accordion.Header>
                <Accordion.Body>
                    <AnimalCrossingData/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AnimalCrossingApp;