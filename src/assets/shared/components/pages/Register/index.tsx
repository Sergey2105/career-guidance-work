/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import InputPassword from "../../inputs/inputPassword";
import { login } from "../../store/slice/authSlice";
import ButtonLogin from "../../buttons/ButtonLogin";

const Register = () => {
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
    };

    const disabled = inputLogin.length == 0 || inputPassword.length == 0;

    return (
        <div className={styles["container"]}>
            <div className={styles["body"]}>
                <div className={styles["form__greetings"]} onClick={SwitchLogin}>
                    Добро пожаловать
                </div>
                <div className={styles["form__title"]} onClick={SwitchLogin}>
                    Зарегестрируйтесь
                </div>
                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <div className={styles["form__input"]}>
                        <InputText type={"email"} placeholder={"Email"} label={"Email"} onChange={changeEmail} changeClear={changeEmailClear} />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText placeholder={"Введите логин"} label={"Логин"} onChange={changeLogin} changeClear={changeLoginClear} />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} />
                    </div>
                </form>
                <div className={styles["form__btn"]}>
                    <ButtonLogin label={"Войти"} onClick={handleSubmit} disabled={disabled} />
                </div>
                <a href="/forgot" className={styles["form__forgot"]}>
                    <div className={styles["form__forgot"]} onClick={SwitchLogin}>
                        Не помните пароль?
                    </div>
                </a>
                <a href="/login" className={styles["form__registration"]}>
                    <div className={styles["form__registration"]} onClick={SwitchLogin}>
                        Вход в личный кабинет
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Register;
