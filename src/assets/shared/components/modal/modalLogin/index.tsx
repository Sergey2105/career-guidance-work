import InputText from "@/assets/shared/components/inputs/inputText";
import styles from "./index.module.scss";
import InputPassword from "@/assets/shared/components/inputs/inputPassword";
import React, { useState } from "react";
import ButtonLogin from "@/assets/shared/components/buttons/ButtonLogin";
import ModalBase from "../../modalBase";

interface IModal {
    onCloseModal: () => void;
}

const ModalLogin: React.FC<IModal> = (props) => {
    const { onCloseModal } = props;
    const [inputValue, setInputValue] = useState<any>({ login: "", password: "" });

    const changeLogin = (e) => {
        setInputValue({ ...inputValue, login: e.target.value });
    };

    console.log(inputValue.login);
    const changeLoginClear = (e: { target: { value: any } }) => {
        setInputValue({ ...inputValue, login: "" });
    };

    return (
        <>
            <ModalBase
                title={"Вход или регистрация"}
                onCloseModal={onCloseModal}
                size="default"
                footer={
                    <>
                        <ButtonLogin label={"Войти"} />
                    </>
                }
            >
                <form>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите логин"} label={"Логин"} onChange={changeLogin} changeClear={changeLoginClear} />
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
