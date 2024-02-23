import styles from "../index.module.scss";
import React, { useState } from "react";

const ButtonLogin = (props) => {
    const { label, onClick = () => null, disabled } = props;

    return (
        <div className={styles["btn"]}>
            <button disabled={disabled} type="submit" className={styles["btn__click"]} onClick={onClick}>
                <span className={styles["btn__text"]}>{label}</span>
            </button>
        </div>
    );
};
export default ButtonLogin;
