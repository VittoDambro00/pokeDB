import Axios from "axios";
import { useEffect, useState } from "react";


export default function PokeDecx(){
    let endpoint = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon,  setPokemon] = useState([]);

    useEffect (() => {
        Axios.get(endpoint).then((res) => {
            setPokemon([...res.data.results]);
        })
        .catch((error) => {
            console.log(error)
        });
    }, []) 

    return (
        <div>
            {pokemon.map((pokemonName, index) => {
                return <h1 key={index}>{pokemonName.name}</h1>
            })}
        </div>

    )
}