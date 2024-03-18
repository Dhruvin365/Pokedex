import React from "react";
import { Button } from "react-bootstrap";

function NextPrevButtons(props) {
  const { number, setName } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "16px",
      }}
    >
      <Button
        variant="primary"
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
        onClick={() => {
          if (number > 1) {
            setName(number - 1);
          } else {
            setName(1025);
          }
        }}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          width: "150px",
        }}
        onClick={() => {
          if (number < 1025) {
            setName(number + 1);
          } else {
            setName(1);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default NextPrevButtons;
