/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import InputPassword from "../../inputs/inputPassword";
import { register, selectErrorsRegister } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";

const Register = () => {
    const [inputEmail, setInputEmail] = useState<string>("");
    const [inputLogin, setInputLogin] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [inputFirstName, setInputFirstName] = useState<string>("");
    const [inputLastName, setInputLastName] = useState<string>("");
    const router = useRouter();
    const dispatch = useDispatch();
    const messageError = useSelector(selectErrorsRegister);

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

    const changeFirstName = (e) => {
        setInputFirstName(e.target.value);
    };

    const changeFirstNameClear = () => {
        setInputFirstName("");
    };
    const changeLastName = (e) => {
        setInputLastName(e.target.value);
    };

    const changeLastNameClear = () => {
        setInputLastName("");
    };

    const reg = () => {
        dispatch(register({ username: inputLogin, password: inputPassword, email: inputEmail, first_name: inputFirstName, last_name: inputLastName })).then((res) => {
            if (res.type.includes("fulfilled")) {
                router.push("/login");
            } else if (res.type.includes("rejected")) {
            }
        });
    };

    const disabled = inputLogin.length == 0 || inputPassword.length == 0 || inputEmail.length == 0 || inputFirstName.length == 0 || inputLastName.length == 0;

    return (
        <div className={styles["container"]}>
            <div className={styles["body"]}>
                <div className={styles["form__greetings"]}>Добро пожаловать</div>
                <div className={styles["form__title"]}>Зарегистрируйтесь</div>
                <div className={styles["form"]}>
                    <div className={styles["form__input"]}>
                        <InputText
                            type={"email"}
                            placeholder={"Введите email"}
                            label={"Email"}
                            onChange={changeEmail}
                            changeClear={changeEmailClear}
                            error={messageError?.email}
                            value={inputEmail}
                        />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText
                            placeholder={"Введите логин"}
                            label={"Логин"}
                            onChange={changeLogin}
                            changeClear={changeLoginClear}
                            error={messageError?.username}
                            value={inputLogin}
                        />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText
                            placeholder={"Введите имя"}
                            label={"Имя"}
                            onChange={changeFirstName}
                            changeClear={changeFirstNameClear}
                            error={messageError?.first_name}
                            value={inputFirstName}
                        />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText
                            placeholder={"Введите фамилию"}
                            label={"Фамилия"}
                            onChange={changeLastName}
                            changeClear={changeLastNameClear}
                            error={messageError?.last_name}
                            value={inputLastName}
                        />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} error={messageError?.password} value={inputPassword} />
                    </div>
                </div>
                <div className={styles["form__error"]}></div>
                <div className={styles["form__btn"]}>
                    <Button type="default" onClick={() => reg()} disabled={disabled}>
                        Регигистрация
                    </Button>
                </div>
                <a href="/login" className={styles["form__registration"]}>
                    <div className={styles["form__registration"]}>Вход в личный кабинет</div>
                </a>
            </div>
        </div>
    );
};
export default Register;
