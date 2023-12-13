import Axios from "axios";
import { useState, useEffect } from "react";

export default function PokeCard(props) {
  return (
    <div className="bg-slate-800 border-2 border-slate-50 text-white text-center p-5 w-48">
      <div className="flex  flex-col justify-center items-center">
        <h1># {props.pokemon.id}</h1> {/*numero pokemon*/}
        <h1>{props.pokemon.name}</h1>{" "}
        {/* aggiungere className="uppercase" nome pokemon*/}
      </div>
      <img
        className="m-auto"
        src={props.pokemon.sprites.front_default}
        alt={props.pokemon.name}
      />
      {/*sprite pokemon*/}
      <div>
        Tipo:
        {props.pokemon.types.map((type, i) => (
          <h1 key={i}>{type.type.name}</h1>
        ))}
      </div>
      {/*tipo pokemon*/}
      <h1>Altezza: {props.pokemon.height}</h1>
      {/* CAMBIARE IN DECIMALE altezza pokemon*/}
      <h1>Peso: {props.pokemon.weight} kg</h1> {/*peso pokemon*/}
    </div>
  );
}
