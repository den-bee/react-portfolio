import React, {useState} from 'react';
import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import ColorSelectApp from 'components/Work/ColorSelect/ColorSelect';
import FilteringApp from 'components/Work/Filtering/Filtering';
import IntervalApp from 'components/Work/Interval/Interval';
import ShoppingListApp from './ShoppingList/ShoppingList';
import SlotMachineApp from './SlotMachine/SlotMachine';
import JokesApp from './FavoriteJoke/FavoriteJoke';
import PokedexApp from './PokedexApp/PokedexApp';
import Pokedex from './Pokedex/Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Work.module.css"

const componentArray = [
    <ColorSelectApp/>,
    <FilteringApp/>,
    <IntervalApp/>,
    <ShoppingListApp/>,
    <SlotMachineApp/>,
    <JokesApp/>,
    <PokedexApp/>,
    <Pokedex/>
]

const Work = () => {
    return (
        <div>
            <div className={styles.workContainer}>
            {componentArray.map((component, index) => 
                <div key={index} className={styles.accordion}>
                    {component}
                </div>
            )}
        </div>
        </div>
        
    )
}

export default Work;