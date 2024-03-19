import React, { ReactElement } from "react";
import styles from "../index.module.scss";
import { clsx } from "clsx";

export interface btn {
    children: React.ReactNode;
    onClick?: () => void;
    // onClick?;
    type?: "default" | "white";
    disabled?: boolean;
}
const Button = (props): ReactElement => {
    const { children, onClick = () => null, type, disabled = false } = props;

    return (
        // <div className={styles["btn"]}>
        <button
            className={clsx(styles["btn"], styles[`btn__${type}`], disabled && styles[`btn__disabled`])}
            // className={styles["btn__${type}__click"]}
            onClick={onClick}
            disabled={disabled}
            type="button"
        >
            {/* <span className={styles["btn__text"]}>{label}</span> */}
            {children}
        </button>
        // </div>
    );
};
export default Button;
