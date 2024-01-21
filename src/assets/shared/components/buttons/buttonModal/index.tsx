import styles from "../index.module.scss";
import React, { useState } from "react";

const ButtonModal = (props: { label: any; windowOpen: any }) => {
    const { label, windowOpen } = props;

    return (
        <div className={styles["btn"]}>
            <button className={styles["btn__click"]} onClick={windowOpen}>
                <span className={styles["btn__text"]}>{label}</span>
            </button>
        </div>
    );
};
export default ButtonModal;
