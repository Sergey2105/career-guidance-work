import styles from "./index.module.scss";
import React, { useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";

const ModalUnauth = (props) => {
    const { switchModal } = props;
    const router = useRouter();

    return (
        <>
            <ModalBase
                title={"Пользователь не авторизован"}
                onCloseModal={switchModal}
                size="login"
                footer={
                    <>
                        <Button label={"Регистрация"} onClick={() => router.push("/register")} />
                        <Button label={"Закрыть"} onClick={switchModal} />
                    </>
                }
            >
                <div>Для записи на мероприятие необходмо авторизоваться</div>
            </ModalBase>
        </>
    );
};
export default ModalUnauth;
