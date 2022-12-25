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
                <Accordion.Item className={styles.accordion}  eventKey="0">
                    <Accordion.Header as="h3">ColorSelect</Accordion.Header>
                    <Accordion.Body>
                        <p>Ever wanted to make a color appear on screen? Well now you can! Just pick a color. Go ahead, try it out!</p>
                        <ColorSelect/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="1">
                    <Accordion.Header as="h3">ShoppingList</Accordion.Header>
                    <Accordion.Body>
                        <p>We all know it.. You go shopping, you get back home and you realize you forgot some stuff. Not anymore! With this handy shoppinglist I made.</p>
                        <ShoppingListApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="2">
                    <Accordion.Header as="h3">SlotMachine</Accordion.Header>
                    <Accordion.Body>
                        <p>Just a small slot machine game for you. In case you don't want to go out and walk to the casino.</p>
                        <SlotMachineApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="3">
                    <Accordion.Header as="h3">Interval</Accordion.Header>
                    <Accordion.Body>
                        <p>This amazing app gives you a random value between 0 - 100 AND between 100 - 200. And it even does this EVERY SECOND!</p>
                        <Interval/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="4">
                    <Accordion.Header as="h3">Filtering</Accordion.Header>
                    <Accordion.Body>
                        <p>This app shows you a list with names and other info. You can even filter a name in the list by typing it in the searchbar!</p>
                        <Filtering/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="5">
                    <Accordion.Header as="h3">JokesApp</Accordion.Header>
                    <Accordion.Body>
                        <p>You're in a bar with your colleagues and you want to make an impression. I got the app for you! Use this Joke App to get a random joke, tell it to your colleagues and become the most populair guy in town!</p>
                        <JokesApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="7">
                    <Accordion.Header as="h3">PokedexApp</Accordion.Header>
                    <Accordion.Body>
                        <p>This is a sample of the Pokedex you can see in the next component. You can set a limit and it will show you that amount of pokemon in the list.</p>
                        <PokedexApp/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item className={styles.accordion}  eventKey="7">
                    <Accordion.Header as="h3">Pokedex</Accordion.Header>
                    <Accordion.Body>
                        <p>Click the pokedex and see what happens!</p>
                        <Pokedex/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Work;