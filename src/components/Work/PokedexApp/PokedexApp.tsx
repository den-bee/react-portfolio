import React, { useEffect } from 'react';
import logo from './logo.svg';
import {useState} from 'react';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import styles from "./PokedexApp.module.css";

interface PokedexProps {
  limit? : number
}

interface PokeData {
  results : Pokemon[]
}

interface Pokemon {
  name : string,
  url : string
}

const Pokedex = ({limit = 151} : PokedexProps) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");

  const loadPokemon = async(limit: number) => {
    setLoading(true);
    let result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit);
    let pokedex : PokeData = await result.json();

    setPokemon(pokedex.results);
    setLoading(false);
  }
  useEffect(() => {
    loadPokemon(limit);
  }, [limit])

  return (
    <div className={styles.pokedexForm}>
      {loading && <LoadingIndicator/>}
      <input type="text" onChange={(e) => setFilterText(e.target.value)} value={filterText}/>
      <ul>
        {
          pokemon.filter((p) => p.name.toUpperCase().startsWith(filterText.toUpperCase())).map((pokemon) => {
            return <p>{pokemon.name}</p>
          })
        }
      </ul>
    </div>
  )
}

function PokedexApp() {
  const [limit, setLimit] = useState(10);
  const [activeLimit, setActiveLimit] = useState(10);
  return (
    <div className={styles.pokedexContainer}>
      <Pokedex limit={activeLimit}/>
      <input type="number" onChange={(e) => setLimit(Number(e.target.value))} value={limit}/>
      <button onClick={() => {
        setActiveLimit(limit);
      }}>Set Limit</button>
      
    </div>
  );
}

export default PokedexApp;
