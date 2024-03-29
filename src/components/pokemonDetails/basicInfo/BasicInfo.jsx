import React from "react";
import Title from "./Title";
import Image from "./Image";
import Details from "./Details";

function BasicInfo(props) {
  const { data } = props;

  if (!data) return null;

  const {
    id,
    name,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    height,
    weight,
    abilities,
  } = data;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Title id={id} name={name} />
      <div style={{ width: "40%", margin: "auto" }}>
        <Image name={name} img={front_default} />
        <Details
          id={id}
          height={height}
          weight={weight}
          abilities={abilities}
        />
      </div>
    </div>
  );
}

export default BasicInfo;
