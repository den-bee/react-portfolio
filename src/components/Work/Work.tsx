import React, {useState} from 'react';
import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import ColorSelectApp from 'components/Work/ColorSelect/ColorSelect';
import FilteringApp from 'components/Work/Filtering/Filtering';
import IntervalApp from 'components/Work/Interval/Interval';
import ShoppingListApp from './ShoppingList/ShoppingList';
import SlotMachineApp from './SlotMachine/SlotMachine';
import JokesApp from './FavoriteJoke/FavoriteJoke';
import AnimalCrossingApp from './AnimalCrossingApp/AnimalCrossingApp';
import PokedexApp from './PokedexApp/PokedexApp';
import Pokedex from './Pokedex/Pokedex';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Work.module.css"

interface Component {
    type: JSX.Element,
    name: string
}

const componentArray : Component[]= [
    {type: <ColorSelectApp/>, name: "Colorselect"},
    {type: <FilteringApp/>, name: "Filteringapp"},
    {type: <IntervalApp/>, name: "Intervalapp"},
    {type: <ShoppingListApp/>, name: "Shoppinglistapp"},
    {type: <SlotMachineApp/>, name: "Slotmachineapp"},
    {type: <JokesApp/>, name: "Jokesapp"},
    {type: <PokedexApp/>, name: "Pokedexapp"},
    {type: <Pokedex/>, name: "Pokedex"},
    {type: <AnimalCrossingApp/>, name: "Animalcrossingapp"}
];

const Work = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <div>
            <div className={styles.searchContainer}>
            <label>Search Component: </label>
            <input className={styles.search} type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
            </div>
            <div className={styles.workContainer}>
            {componentArray.filter(c => c.name.toUpperCase().startsWith(searchText.toUpperCase())).map((component, index) => 
                <div key={index} className={styles.accordion}>
                    {component.type}
                </div>
            )}
            </div>
        </div>
    )
}

export default Work;