import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            <div className={styles["loader"]}>
                <div className={styles["loader__tail"]}></div>
            </div>
        </>
    );
};
export default Loader;
