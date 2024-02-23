import styles from "../index.module.scss";
import React, { useState } from "react";

const ButtonModal = (props) => {
    const { label, windowOpen, onClick = () => null } = props;

    return (
        <div className={styles["btn"]}>
            <button className={styles["btn__click"]} onClick={onClick}>
                <span className={styles["btn__text"]}>{label}</span>
            </button>
        </div>
    );
};
export default ButtonModal;
