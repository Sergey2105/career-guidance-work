/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import InputPassword from "../../inputs/inputPassword";
import { activated, login, selectUser } from "../../store/slice/authSlice";
import ButtonLogin from "../../buttons/ButtonLogin";
import { selectFullUser, userDate } from "../../store/slice/userSlice";

const Login = () => {
    const [inputLogin, setInputLogin] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();
    const userData = useSelector(selectUser);
    const fullUserData = useSelector(selectFullUser);
    const dispatch = useDispatch();
    console.log(fullUserData);

    useEffect(() => {
        dispatch(userDate());
    }, []);

    const changeLogin = (e) => {
        setInputLogin(e.target.value);
    };

    const changeLoginClear = () => {
        setInputLogin("");
    };

    const changePassword = (e) => {
        setInputPassword(e.target.value);
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
                if (userData.id) {
                    router.push("/");
                } else {
                    setError(false);
                    router.push("/");
                    dispatch(activated());
                }
            } else if (res.type.includes("rejected")) {
                setError(true);
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
                <div className={styles["form__greetings"]}>Добро пожаловать</div>
                <div className={styles["form__title"]}>Войдите в личный кабинет</div>
                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <div className={styles["form__input"]}>
                        <InputText placeholder={"Введите логин"} label={"Логин"} onChange={changeLogin} changeClear={changeLoginClear} error={error} value={inputLogin} />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} error={error} value={inputPassword} />
                    </div>
                </form>
                <div className={styles["form__error"]}>{error ? "Неверные данные для входа." : null}</div>
                <div className={styles["form__btn"]}>
                    <ButtonLogin label={"Войти"} onClick={handleSubmit} disabled={disabled} />
                </div>
                <a href="/reset" className={styles["form__forgot"]}>
                    <div className={styles["form__forgot"]}>Не помните пароль?</div>
                </a>
                <a href="/register" className={styles["form__registration"]}>
                    <div className={styles["form__registration"]}>Регистрация</div>
                </a>
            </div>
        </div>
    );
};
export default Login;
