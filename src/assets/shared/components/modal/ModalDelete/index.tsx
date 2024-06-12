import styles from "./index.module.scss";
import React, { useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";

const ModalDelete = (props) => {
    const { switchModal, text, deleteMeeting } = props;
    const router = useRouter();

    return (
        <>
            <ModalBase
                title={"Подтверждение"}
                onCloseModal={switchModal}
                size="login"
                footer={
                    <>
                        <Button type="white" onClick={switchModal}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={deleteMeeting}>
                            Удалить
                        </Button>
                    </>
                }
            >
                <div className={styles["text"]}>{text}</div>
            </ModalBase>
        </>
    );
};
export default ModalDelete;
