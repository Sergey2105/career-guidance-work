import React, { useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const CreateMeetingViewHeader = (props) => {
    const { children } = props;
    const router = useRouter();

    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["header__title"]}>
                    <span>Имя</span>
                    <span>Фамилия</span>
                    <span>Номер телефона</span>
                    <span>Telegram ID</span>
                </div>
                <div className={styles["line"]}></div>
                <div>{children}</div>
            </div>
        </>
    );
};
export default CreateMeetingViewHeader;
