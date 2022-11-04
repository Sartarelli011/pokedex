import axios from "axios";
import React, { useState, useEffect } from "react";

function Card({ name, url, index }) {
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = () => {
    axios.get(url).then((response) => {
      setPokemonImage(response.data.sprites.other.dream_world);
      setPokemonType(response.data.types);
    });
  };

  return (
    <div className="Card" key={index}>
      <img className="Card-image" src={pokemonImage.front_default}></img>
      <h2>{name}</h2>
      <div className="Divtype">
        {pokemonType.map((item) => {
          return <h3 key={item.type.name}>| {item.type.name} |</h3>;
        })}
      </div>
    </div>
  );
}

export default Card;
