import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
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

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        nextPage,
        prevPage,
        loading,
        gotoNextPage,
        gotoPrevPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
