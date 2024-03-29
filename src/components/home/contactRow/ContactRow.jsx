import React from "react";
import Form from "./Form";
import Title from "../../common/Title";
import styles from "../../../styles/home/contactRow.module.css";

function ContactRow() {
  return (
    <div className={styles.contatcRowContainerOuter}>
      <Title
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."
      />
      <div className={styles.contatcRowContainerInner}>
        <Form />
      </div>
    </div>
  );
}

export default ContactRow;
