/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import InputPassword from "../../inputs/inputPassword";
import { activated, register, selectErrors } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";

const Register = () => {
    const [inputEmail, setInputEmail] = useState<string>("");
    const [inputLogin, setInputLogin] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [inputFirstName, setInputFirstName] = useState<string>("");
    const [inputLastName, setInputLastName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const messageError = useSelector(selectErrors);

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
                // const referrer = new URLSearchParams(window.location.search)?.get("referrer") || "/meeting/";
                // if (!referrer.includes("meeting")) {
                //     window.location.href = `${window.location.origin}${referrer}`;
                // } else {
                //     router.push(referrer);
                // }
                setError(false);
                router.push("/login");
            } else if (res.type.includes("rejected")) {
                setError(true);
            }
        });
    };
    // console.log(Object.keys(messageError));
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     reg();
    // };

    const disabled = inputLogin.length == 0 || inputPassword.length == 0 || inputEmail.length == 0 || inputFirstName.length == 0 || inputLastName.length == 0;

    return (
        <div className={styles["container"]}>
            <div className={styles["body"]}>
                <div className={styles["form__greetings"]}>Добро пожаловать</div>
                <div className={styles["form__title"]}>Зарегестрируйтесь</div>
                <div className={styles["form"]}>
                    <div className={styles["form__input"]}>
                        <InputText
                            type={"email"}
                            placeholder={"Введите email"}
                            label={"Email"}
                            onChange={changeEmail}
                            changeClear={changeEmailClear}
                            error={error}
                            value={inputEmail}
                        />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText placeholder={"Введите логин"} label={"Логин"} onChange={changeLogin} changeClear={changeLoginClear} error={error} value={inputLogin} />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText placeholder={"Введите имя"} label={"Имя"} onChange={changeFirstName} changeClear={changeFirstNameClear} value={inputFirstName} />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputText placeholder={"Введите фамилию"} label={"Фамилия"} onChange={changeLastName} changeClear={changeLastNameClear} value={inputLastName} />
                    </div>
                    <div className={styles["form__input"]}>
                        <InputPassword placeholder={"Введите пароль"} label={"Пароль"} onChange={changePassword} error={error} value={inputPassword} />
                    </div>
                </div>
                <div className={styles["form__error"]}>
                    {/* {Object.keys(messageError).map((element, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div>{element}</div>
                    ))} */}
                </div>
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
