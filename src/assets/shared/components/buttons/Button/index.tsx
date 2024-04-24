import React, { ReactElement } from "react";
import styles from "../index.module.scss";
import { clsx } from "clsx";

export interface btn {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "default" | "white" | "delete";
    disabled?: boolean;
}
const Button = (props: btn): ReactElement => {
    const { children, onClick = () => null, type, disabled = false } = props;

    return (
        <button className={clsx(styles["btn"], styles[`btn__${type}`], disabled && styles[`btn__disabled`])} onClick={onClick} disabled={disabled} type="button">
            {children}
        </button>
    );
};
export default Button;
