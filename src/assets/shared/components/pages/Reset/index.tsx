/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import InputPassword from "../../inputs/inputPassword";
import { login } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";

const Reset = () => {
    const [inputEmail, setInputEmail] = useState<string>("");
    const router = useRouter();
    const dispatch = useDispatch();

    const changeEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const changeEmailClear = () => {
        setInputEmail("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const disabled = inputEmail.length == 0;

    return (
        <div className={styles["container"]}>
            <div className={styles["body"]}>
                <div className={styles["form__greetings"]}>Добро пожаловать</div>
                <div className={styles["form__title"]}>Востановить пароль</div>
                <form className={styles["form"]}>
                    <div className={styles["form__input"]}>
                        <InputText type={"email"} placeholder={"Введите email"} label={"Email"} onChange={changeEmail} changeClear={changeEmailClear} value={inputEmail} />
                    </div>
                </form>
                <div className={styles["form__btn"]}>
                    <Button type="default" onClick={() => handleSubmit} disabled={disabled}>
                        Воcтановить пароль
                    </Button>
                </div>
                <a href="/login" className={styles["form__registration"]}>
                    <div className={styles["form__registration"]}>Вход в личный кабинет</div>
                </a>
            </div>
        </div>
    );
};
export default Reset;
