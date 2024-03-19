import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            <div className={styles["loader"]}>
                <div className={styles["loader__tail"]}></div>
                {/* <TailSpin visible={true} height="50" width="50" color="#000" ariaLabel="tail-spin-loading" radius="10" wrapperStyle={{}} wrapperClass="" /> */}
            </div>
        </>
    );
};
export default Loader;
