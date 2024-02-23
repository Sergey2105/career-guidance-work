import InputText from "@/assets/shared/components/inputs/inputText";
import styles from "./index.module.scss";
import InputPassword from "@/assets/shared/components/inputs/inputPassword";
import React, { useState } from "react";
import ButtonLogin from "@/assets/shared/components/buttons/ButtonLogin";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import ButtonRegistration from "../../buttons/ButtonRegistration";
import { login } from "../../store/slice/authSlice";
import { useDispatch } from "../../store/hooks";

const ModalLogin = (props) => {
    const { onCloseModal } = props;
    const [inputEmail, setInputEmail] = useState<string>("");
    const [inputLogin, setInputLogin] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [islogin, setIsLogin] = useState<boolean>(true);
    const router = useRouter();
    const dispatch = useDispatch();

    const changeEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const changeEmailClear = () => {
        setInputEmail("");
    };

    const changeLogin = (e) => {
        setInputLogin(e.target.value);
    };

    const changeLoginClear = () => {
        setInputLogin("");
    };

    const changePassword = (e) => {
        setInputPassword(e.target.value);
    };

    const SwitchLogin = () => {
        if (islogin) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    };

    const auth = () => {
        dispatch(login({ username: inputLogin, password: inputPassword })).then((res) => {
            if (res.type.includes("fulfilled")) {
                // const referrer = new URLSearchParams(window.location.search)?.get("referrer") || "/meeting/";
                // if (!referrer.includes("meeting")) {
                //     window.location.href = `${window.location.origin}${referrer}`;
                // } else {
                //     router.push(referrer);
                // }
                router.push("/");
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        auth();
        // window.location.reload();
        onCloseModal();
    };

    // const register = () => {
    //     dispatch(signup({ username: inputLogin, password: inputPassword, email: inputEmail }));
    // };

    const disabled = inputLogin.length == 0 || inputPassword.length == 0;

    return (
        <>
            <ModalBase
                title={islogin ? "Вход" : "Регистрация"}
                onCloseModal={onCloseModal}
                size="login"
                footer={<>{islogin ? <ButtonLogin label={"Войти"} onClick={handleSubmit} disabled={disabled} /> : <ButtonLogin label={"Регистрация"} />}</>}
            >
                <div>
                    {islogin ? (
                        <>
                            <form className={styles["body"]} onSubmit={handleSubmit}>
                                <div className={styles["body__input"]}>
                                    <InputText placeholder={"Введите логин"} label={"Логин"} onChange={changeLogin} changeClear={changeLoginClear} />
                                </div>
                                <div className={styles["body__input"]}>
                                    <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} />
                                </div>
                            </form>
                            <div className={styles["body__registration"]} onClick={SwitchLogin}>
                                <span>Регистрация</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <form className={styles["body"]}>
                                <div className={styles["body__input"]}>
                                    <InputText type={"email"} placeholder={"Email"} label={"Email"} onChange={changeEmail} changeClear={changeEmailClear} />
                                </div>
                                <div className={styles["body__input"]}>
                                    <InputText placeholder={"Введите логин"} label={"Логин"} onChange={changeLogin} changeClear={changeLoginClear} />
                                </div>
                                <div className={styles["body__input"]}>
                                    <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} />
                                </div>
                            </form>
                            <div className={styles["body__registration"]} onClick={SwitchLogin}>
                                <span>Войти</span>
                            </div>
                        </>
                    )}
                </div>
            </ModalBase>
        </>
    );
};
export default ModalLogin;
