/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import { activated, clearErrorsAction, login, selectErrorsLogin, selectUser } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";
import InputPassword from "../../inputs/inputPassword";

const Login = () => {
    const [inputLogin, setInputLogin] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();
    const userDataFull = useSelector(selectUser);
    const userData = useSelector(selectUser);
    const dispatch = useDispatch();
    const loginErrors = useSelector(selectErrorsLogin);

    useEffect(() => {
        dispatch(clearErrorsAction());
    }, [inputLogin, inputPassword]);

    const changeLogin = (e) => {
        setInputLogin(e.target.value);
    };

    const changeLoginClear = () => {
        setInputLogin("");
    };

    const changePassword = (e) => {
        setInputPassword(e.target.value);
    };

    // const auth = () => {
    //     const redirectUrl = localStorage.getItem("redirectAfterLogin");
    //     dispatch(login({ username: inputLogin, password: inputPassword })).then((res) => {
    //         if (res.type.includes("fulfilled") && redirectUrl) {
    //             router.push(redirectUrl);
    //         } else if (res.type.includes("rejected")) {
    //             router.push("/");
    //         }
    //     });
    // };

    const auth = () => {
        const redirectUrl = localStorage.getItem("redirectAfterLogin");
        dispatch(login({ username: inputLogin, password: inputPassword })).then((res) => {
            if (res.type.includes("fulfilled")) {
                if (redirectUrl) {
                    if (userDataFull?.id && userDataFull?.birthday === null && userDataFull?.birthday === "" && userDataFull?.phone === null && userDataFull?.phone === "") {
                        // Сохраните redirectUrl перед переходом на страницу данных
                        localStorage.setItem("redirectAfterLogin", redirectUrl);
                        router.push("/data");
                    } else {
                        router.push(redirectUrl);
                    }
                } else if (userData?.id_profile === "None") {
                    router.push("/data");
                } else {
                    router.push("/");
                }
            }
        });
    };

    // useEffect(() => {
    //     // Проверка, если пользователь вошел в систему
    //     const token = localStorage.getItem("userToken");
    //     if (token) {
    //         const redirectUrl = localStorage.getItem("redirectAfterLogin");
    //         if (redirectUrl) {
    //             localStorage.removeItem("redirectAfterLogin");
    //             router.push(redirectUrl);
    //         } else {
    //             router.push("/");
    //         }
    //     }
    // }, [router]);

    const disabled = inputLogin.length == 0 || inputPassword.length == 0;

    return (
        <div className={styles["container"]}>
            <div className={styles["body"]}>
                <div className={styles["form__greetings"]}>Добро пожаловать</div>
                <div className={styles["form__title"]}>Войдите в личный кабинет</div>
                <div className={styles["form"]}>
                    <div className={styles["form__input"]}>
                        <InputText
                            placeholder={"Введите логин"}
                            label={"Логин"}
                            onChange={changeLogin}
                            changeClear={changeLoginClear}
                            error={loginErrors?.non_field_errors}
                            value={inputLogin}
                            fullerror={false}
                        />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} error={loginErrors?.non_field_errors} value={inputPassword} />
                    </div>
                </div>
                {loginErrors ? <div className={styles["form__error"]}>{loginErrors?.non_field_errors}</div> : null}
                <div className={styles["form__btn"]}>
                    <Button type="default" onClick={() => auth()} disabled={disabled}>
                        Войти
                    </Button>
                </div>
                {/* <a href="/reset" className={styles["form__forgot"]}>
                    <div className={styles["form__forgot"]}>Не помните пароль?</div>
                </a> */}
                <a href="/register" className={styles["form__registration"]}>
                    <div className={styles["form__registration"]}>Регистрация</div>
                </a>
            </div>
        </div>
    );
};
export default Login;
