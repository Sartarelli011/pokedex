import React from "react";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="Btn-div">
      {gotoPrevPage && (
        <button className="Btn" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="Btn" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
export default Pagination;
