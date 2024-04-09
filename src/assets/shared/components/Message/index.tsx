import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

import Notification from "/public/icons/notification.svg";

const Message = (props) => {
    const { children, error } = props;
    return (
        <>
            <div className={!error ? styles["modal"] : styles["modal__error"]}>
                <div className={styles["modal__icon"]}>
                    <Notification />
                </div>
                <span className={styles["modal__text"]}>{children}</span>
            </div>
        </>
    );
};

export default Message;
