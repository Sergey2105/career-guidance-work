import styles from "../index.module.scss";
import React, { useState } from "react";

const Button = (props) => {
    const { label, onClick = () => null } = props;

    return (
        <div className={styles["btn"]}>
            <button className={styles["btn__click"]} onClick={onClick}>
                <span className={styles["btn__text"]}>{label}</span>
            </button>
        </div>
    );
};
export default Button;
