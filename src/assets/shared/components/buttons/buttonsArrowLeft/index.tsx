import styles from "./index.module.scss";
import React from "react";
import ArrowLeft from "/public/icons/arrowleft.svg";

const ButtonArrowLeft = () => {
    return (
        <div className={styles["btn"]}>
            <ArrowLeft />
        </div>
    );
};
export default ButtonArrowLeft;
