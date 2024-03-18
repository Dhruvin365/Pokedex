import React from "react";

function PaginationButons(props) {
  function handleNext() {
    props.setPage(function (p) {
      return ++p;
    });
  }

  function handlePrev() {
    props.setPage(function (p) {
      if (p > 0) {
        return --p;
      } else {
        return 0;
      }
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "16px 32px",
      }}
    >
      <button
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          marginLeft: "10px",
          width: "150px",
        }}
        onClick={handlePrev}
      >
        Perv
      </button>
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          width: "150px",
        }}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButons;
