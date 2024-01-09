import InputText from "@/assets/shared/components/inputs/inputText";
import styles from "./index.module.scss";
import InputPassword from "@/assets/shared/components/inputs/inputPassword";
import React from "react";
import ButtonConfirm from "@/assets/shared/components/buttons/buttonConfirm";
import ModalBase from "../../layout/modalBase";

interface IModal {
    onCloseModal: () => void;
}

const ModalLogin: React.FC<IModal> = (props) => {
    const { onCloseModal } = props;

    return (
        <>
            <ModalBase
                title={"Вход или регистрация"}
                onCloseModal={onCloseModal}
                size="default"
                footer={
                    <>
                        <ButtonConfirm label={"Войти"} />
                    </>
                }
            >
                <form>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите логин"} label={"Логин"} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputPassword placeholder={"Введите пароль"} label={"Пароль"} />
                    </div>
                </form>
            </ModalBase>
        </>
    );
};
export default ModalLogin;
