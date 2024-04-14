import React, { useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const CreateMeetingHeader = (props) => {
    const { children } = props;
    const router = useRouter();

    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["header__title"]}>
                    <span>Название мероприятия</span>
                    <span>Дата проведения</span>
                    <span>Количество мест</span>
                    <span>Место проведения</span>
                </div>
                <div className={styles["line"]}></div>
                <div>{children}</div>
            </div>
        </>
    );
};
export default CreateMeetingHeader;
