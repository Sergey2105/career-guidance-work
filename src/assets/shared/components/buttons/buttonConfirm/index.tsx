import styles from "../index.module.scss";
import React, { useState } from "react";

const ButtonConfirm = (props) => {
    const { label } = props;

    return (
        <div className={styles["btn"]}>
            <button className={styles["btn__click"]}>
                <span className={styles["btn__text"]}>{label}</span>
            </button>
        </div>
    );
};
export default ButtonConfirm;
