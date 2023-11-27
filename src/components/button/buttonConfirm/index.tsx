import styles from "./index.module.scss";
import React, { useState } from "react";

const ButtonConfirm = (props: { label: string }) => {
  const { label } = props;

  return (
    <div>
      <button className={styles["btn__send"]}>{label}</button>
    </div>
  );
};
export default ButtonConfirm;
