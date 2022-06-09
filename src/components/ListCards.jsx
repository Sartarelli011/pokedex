import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
function ListCards() {
  const [pokemonName, setPokemonName] = useState([]);

  //pokemon nome
  useEffect(() => {
    const getPokemonName = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      setPokemonName(response.data.results);
    };
    getPokemonName();
  }, []);

  return (
    <div className="ListCards">
      {pokemonName.map((item, index) => {
        return <Card key={index} name={item.name} url={item.url}></Card>;
      })}
    </div>
  );
}

export default ListCards;
