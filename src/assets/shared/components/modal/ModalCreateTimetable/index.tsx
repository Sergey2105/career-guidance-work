import styles from "./index.module.scss";
import React, { useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";

const ModalCreateTimetable = (props) => {
    const { switchModalCreateTimetable } = props;
    const router = useRouter();

    return (
        <>
            <ModalBase
                title={"Саздать запись"}
                onCloseModal={switchModalCreateTimetable}
                size="default"
                footer={
                    <>
                        <Button type="white" onClick={switchModalCreateTimetable}>
                            Закрыть
                        </Button>
                        <Button type="default">Создать</Button>
                    </>
                }
            >
                <div className={styles["body"]}></div>
            </ModalBase>
        </>
    );
};
export default ModalCreateTimetable;
