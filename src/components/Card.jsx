import axios from "axios";
import React, { useState, useEffect } from "react";

function Card(props) {
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) =>
        setPokemonImage(response.data.sprites.other.dream_world)
      );
  }, []);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => setPokemonType(response.data.types));
  }, []);

  return (
    <div className="Card">
      <img className="Card-image" src={pokemonImage.front_default}></img>
      <h2>{props.name}</h2>
      <div className="Divtype">
        {pokemonType.map((item) => {
          return <h3>| {item.type.name} |</h3>;
        })}
      </div>
    </div>
  );
}

export default Card;
