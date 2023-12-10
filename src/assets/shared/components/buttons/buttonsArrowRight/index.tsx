import styles from "./index.module.scss";
import React from "react";
import ArrowRight from "/public/icons/arrowright.svg";

const ButtonArrowRight = () => {
    return (
        <div className={styles["btn"]}>
            <ArrowRight />
        </div>
    );
};
export default ButtonArrowRight;
