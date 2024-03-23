import styles from "./index.module.scss";
import React, { useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";

const ModalRemoveMeeting = (props) => {
    const { switchModal, remove } = props;
    const router = useRouter();

    return (
        <>
            <ModalBase
                title={"Отменить запись"}
                onCloseModal={switchModal}
                size="login"
                footer={
                    <>
                        <Button type="white" onClick={switchModal}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={() => remove()}>
                            Подтвердить отмену
                        </Button>
                    </>
                }
            >
                <div className={styles["text"]}>Вы действительно хотите отменить запись на мероприятие?</div>
            </ModalBase>
        </>
    );
};
export default ModalRemoveMeeting;
