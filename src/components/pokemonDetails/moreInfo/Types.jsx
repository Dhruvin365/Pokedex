import React from "react";
import Chip from "./Chip";

function Types(props) {
  const types = props.types.map((value) => {
    return value.type.name;
  });

  return (
    <div style={{ marginTop: "8px" }}>
      <h2>Types</h2>
      <div
        style={{
          gap: "8px",
          marginTop: "16px",
          fontWeight: "600",
          color: "white",
        }}
      >
        {types.map((value, index) => {
          return <Chip key={index} title={value} />;
        })}
      </div>
    </div>
  );
}

export default Types;
