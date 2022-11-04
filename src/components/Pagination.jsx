import React, { useContext } from "react";
import { PokemonContext } from "../Contexts/pokemonContext";

function Pagination() {
  const { nextPage, prevPage, gotoNextPage, gotoPrevPage } =
    useContext(PokemonContext);
  return (
    <div className="Btn-div">
      {prevPage && (
        <button className="Btn" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {nextPage && (
        <button className="Btn" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
export default Pagination;
