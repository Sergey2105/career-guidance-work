import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);

    return (
        <>
            <div className={styles["loader"]}>
                <div className={styles["loader__tail"]}></div>
            </div>
        </>
    );
};
export default Loader;
