import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import axios from "axios";
function ListCards() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonName();
  }, [currentPage]);

  const getPokemonName = () => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((Response) => {
        setLoading(false);
        setPokemon(Response.data.results);
        setNextPage(Response.data.next);
        setPrevPage(Response.data.previous);
      });
    return () => cancel();
  };

  function gotoNextPage() {
    setCurrentPage(nextPage);
  }

  function gotoPrevPage() {
    setCurrentPage(prevPage);
  }
  if (loading) return "loading...";
  return (
    <div className="ListCards">
      {pokemon.map((item, index) => (
        <Card name={item.name} url={item.url} key={index}></Card>
      ))}
      <Pagination
        gotoNextPage={nextPage ? gotoNextPage : null}
        gotoPrevPage={prevPage ? gotoPrevPage : null}
      ></Pagination>
    </div>
  );
}

export default ListCards;
