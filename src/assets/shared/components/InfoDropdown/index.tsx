import React, { ReactElement, useState } from "react";
import styles from "./index.module.scss";
import Arrow from "/public/icons/arrow.svg";
import clsx from "clsx";

const InfoDropdown = (props) => {
    const { header, children } = props;
    const [visible, setVisible] = useState(false);

    const switchVisible = () => setVisible(!visible);

    return (
        <div className={styles["main"]}>
            <div className={styles["element"]}>
                <div className={clsx(styles["element__header"], visible ? styles["element__header__visible"] : "")} onClick={switchVisible}>
                    <span className={styles["element__header__text"]}>{header}</span>
                    <div className={styles["element__header__icon"]}>
                        <Arrow />
                    </div>
                </div>
                {visible ? (
                    <div className={styles["element__main"]}>
                        <span className={styles["element__main__text"]}>{children}</span>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
export default InfoDropdown;
