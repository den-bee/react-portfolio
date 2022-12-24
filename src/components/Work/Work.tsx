import React from 'react';
import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import ColorSelect from 'components/Work/ColorSelect/ColorSelect';
import Filtering from 'components/Work/Filtering/Filtering';
import Interval from 'components/Work/Interval/Interval';
import ShoppingListApp from './ShoppingList/ShoppingList';
import SlotMachineApp from './SlotMachine/SlotMachine';
import JokesApp from './FavoriteJoke/FavoriteJoke';
import PokedexApp from './PokedexApp/PokedexApp';
import Pokedex from './Pokedex/Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Work.module.css"

const Work = () => {
    return (
        <div className={styles.workContainer}>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header as="h3">ColorSelect</Accordion.Header>
                    <Accordion.Body>
                        <ColorSelect/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header as="h3">ShoppingList</Accordion.Header>
                    <Accordion.Body>
                        <ShoppingListApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header as="h3">SlotMachine</Accordion.Header>
                    <Accordion.Body>
                        <SlotMachineApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header as="h3">Interval</Accordion.Header>
                    <Accordion.Body>
                        <Interval/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="4">
                    <Accordion.Header as="h3">Filtering</Accordion.Header>
                    <Accordion.Body>
                        <Filtering/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="5">
                    <Accordion.Header as="h3">JokesApp</Accordion.Header>
                    <Accordion.Body>
                        <JokesApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="7">
                    <Accordion.Header as="h3">PokedexApp</Accordion.Header>
                    <Accordion.Body>
                        <PokedexApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="7">
                    <Accordion.Header as="h3">Pokedex</Accordion.Header>
                    <Accordion.Body>
                        <Pokedex/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Work;