import styles from "./Pokedex.module.css";
import Accordion from 'react-bootstrap/Accordion';

const Pokedex = () => {
    let pokedexImage = require("assets/PokedexImages/pokedex.png");

    return (
        
        <Accordion>
        <Accordion.Item className={styles.accordion}  eventKey="7">
            <Accordion.Header as="h3">Pokedex</Accordion.Header>
            <Accordion.Body>
                <p>Click the pokedex and see what happens!</p>
                <div className={styles.pokedexContainer}>
                <a href="https://pokedex-nine-ochre.vercel.app/" target="_blank" ><img src={pokedexImage}  alt="pokedex" className={styles.pokedexImg}/></a>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    )
}

export default Pokedex;