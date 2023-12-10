import styles from "./index.module.scss";
import React, { useState } from "react";

const ButtonModal = (props: { label: string }) => {
    const { label } = props;

    return (
        <div>
            <button className={styles["btn"]}>{label}</button>
        </div>
    );
};
export default ButtonModal;
