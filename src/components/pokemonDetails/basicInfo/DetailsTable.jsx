import React from "react";
import styles from "../../../styles/pokemonDetails/basicInfo.module.css";

function DetailsTable(props) {
  const { height, weight, abilities } = props;
  const strAbilities = abilities.map((item) => item.ability?.name).join(", ");

  return (
    <div className={styles.tableContainer}>
      <div>
        <h6>Height</h6>
        <p>{height}</p>
      </div>
      <div>
        <h6>Weight</h6>
        <p>{weight}</p>
      </div>
      <div>
        <h6>Abilities</h6>
        <p>{strAbilities}</p>
      </div>
    </div>
  );
}

export default DetailsTable;
