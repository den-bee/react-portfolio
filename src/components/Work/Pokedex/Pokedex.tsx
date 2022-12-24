import styles from "./Pokedex.module.css";

const Pokedex = () => {
    let pokedexImage = require("assets/PokedexImages/pokedex.png");

    return (
        <div className={styles.pokedexContainer}>
            <a href="https://pokedex-nine-ochre.vercel.app/" target="_blank" ><img src={pokedexImage}  alt="pokedex" className={styles.pokedexImg}/></a>
        </div>
    )
}

export default Pokedex;