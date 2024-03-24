/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { data, getMeFull, selectEventsUser, selectUser, selectUserFull } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";
import InputText from "../../inputs/inputText";
import Loader from "../../Loader";
import InputAria from "../../inputs/inputAria";
import InputDate from "../../inputs/inputDate";

const Data = () => {
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);

    const [inputEmail, setInputEmail] = useState<string>("");
    const [inputFirstName, setInputFirstName] = useState<string>("");
    const [inputLastName, setInputLastName] = useState<string>("");
    const [inputDate, setInputDate] = useState<string>("");
    const [inputTelegram, setInputTelegram] = useState<string>("");
    const [inputInfo, setInputInfo] = useState<string>("");

    useEffect(() => {
        if (userDataFull) {
            setInputEmail(userDataFull.email);
            setInputFirstName(userDataFull.first_name);
            setInputLastName(userDataFull.last_name);
            setInputDate(userDataFull.birthday);
            setInputTelegram(userDataFull.telegram);
            setInputInfo(userDataFull.info);
        }
    }, [userDataFull]);

    const dispatch = useDispatch();
    const router = useRouter();
    const loading = useSelector(selectEventsUser);

    const changeEmail = (e) => {
        setInputEmail(e.target.value);
    };
    const changeFirstName = (e) => {
        setInputFirstName(e.target.value);
    };
    const changeLastName = (e) => {
        setInputLastName(e.target.value);
    };

    const changeDate = (e) => {
        setInputDate(e);
    };

    const changeTelegram = (e) => {
        setInputTelegram(e.target.value);
    };

    const changeInfo = (e) => {
        setInputInfo(e.target.value);
    };

    const changeEmailClear = () => {
        setInputEmail("");
    };
    const changeFirstNameClear = () => {
        setInputFirstName("");
    };
    const changeLastNameClear = () => {
        setInputLastName("");
    };

    const changeDateClear = () => {
        setInputDate("");
    };

    const changeTelegramClear = () => {
        setInputTelegram("");
    };

    const disabled =
        inputEmail?.length == 0 || inputFirstName?.length == 0 || inputLastName?.length == 0 || inputDate?.length == 0 || inputTelegram?.length == 0 || inputInfo?.length == 0;

    const change = () => {
        dispatch(
            data({
                id: userDataFull.id,
                email: inputEmail,
                first_name: inputFirstName,
                last_name: inputLastName,
                birthday: inputDate,
                telegram: inputTelegram,
                info: inputInfo,
            }),
        ).then((res) => {
            if (res.type.includes("fulfilled")) {
                router.push(`/profile/${userData.id_profile}`);
            }
        });
    };

    console.log(userData);
    return (
        <>
            {/* {!loading ? (
                <Loader />
            ) : ( */}
            <div className={styles["wrapper"]}>
                <div className={styles["header"]}>
                    <div className={styles["header__title"]}>Заполните данные</div>
                    <div className={styles["header__zagolovok"]}>Обновите или добавьте данные профиля, чтобы настроить индивидуальный поиск мероприятий.</div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите email"} label={"Email"} onChange={changeEmail} changeClear={changeEmailClear} defaultValue={inputEmail} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите имя"} label={"Имя"} onChange={changeFirstName} changeClear={changeFirstNameClear} defaultValue={inputFirstName} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите фамилию"} label={"Фамилия"} onChange={changeLastName} changeClear={changeLastNameClear} defaultValue={inputLastName} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDate
                            placeholder={"Выберете дату"}
                            label={"Дата рождения"}
                            type={"date"}
                            onChange={changeDate}
                            changeClear={changeDateClear}
                            defaultValue={inputDate}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText
                            placeholder={"Введите Telegram ID"}
                            label={"Telegram ID"}
                            onChange={changeTelegram}
                            changeClear={changeTelegramClear}
                            defaultValue={inputTelegram}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputAria placeholder={"Введите информация"} label={"Информация"} type={"text"} onChange={changeInfo} defaultValue={inputInfo} />
                    </div>
                    <Button type="default" onClick={() => change()} disabled={disabled}>
                        Сохранить
                    </Button>
                    {userDataFull?.birthday !== null ? (
                        <Button type="white" onClick={() => router.push(`/profile/${userData.id_profile}`)} disabled={disabled}>
                            Назад
                        </Button>
                    ) : null}
                </div>
            </div>
            {/* )} */}
        </>
    );
};
export default Data;
