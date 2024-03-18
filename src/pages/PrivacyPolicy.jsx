import React from "react";

const Privacy = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#3f3f3f", marginBottom: "20px" }}>Privacy Policy</h1>
      <p style={{ color: "#666", textAlign: "center", marginBottom: "20px" }}>
        This is a simple Pokédex application that allows you to search for and
        view information about different Pokémon. The data is fetched from Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ullam a nostrum, aut illo molestiae aliquid reiciendis autem eos modi
        voluptate tempora odit facilis, eius perferendis dicta. Voluptatum
        maiores obcaecati blanditiis numquam tempora quis repellat dicta
        reprehenderit, saepe ut quo eos?
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#008cba" }}
        >
          PokéAPI
        </a>
        .
      </p>
      <p style={{ color: "#666", textAlign: "center" }}>
        The application is built using ReactJS, a popular JavaScript library for
        building user interfaces. The data is fetched from the API using the
        Axios library.
      </p>
    </div>
  );
};

export default Privacy;
