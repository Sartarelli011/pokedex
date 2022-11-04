import React, { useContext } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { PokemonContext } from "../Contexts/pokemonContext";
function ListCards() {
  const { pokemon, loading } = useContext(PokemonContext);

  if (loading) return "loading...";
  return (
    <div className="ListCards">
      {pokemon?.map((item, index) => (
        <Card name={item.name} url={item.url} key={index}></Card>
      ))}
      <Pagination />
    </div>
  );
}

export default ListCards;
