import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { data, getAnotherFull, getMe, getMeFull, selectUser, selectUserFull } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";
import InputText from "../../inputs/inputText";
import InputAria from "../../inputs/inputAria";
import InputDate from "../../inputs/inputDate";
import { InputDropdownTags } from "../../inputs/InputDropdown/Tags";
import { getTags, selectTags } from "../../store/slice/eventSlice";
import Message from "../../Message";

const Data = () => {
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);

    const [inputEmail, setInputEmail] = useState<string>("");
    const [inputFirstName, setInputFirstName] = useState<string>("");
    const [inputLastName, setInputLastName] = useState<string>("");
    const [inputDate, setInputDate] = useState<string>("");
    const [inputPhone, setInputPhone] = useState<string>("");
    const [inputTelegram, setInputTelegram] = useState<string>("");
    const [inputTags, setInputTags] = useState<any>([]);
    const [inputInfo, setInputInfo] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (userDataFull) {
            setInputEmail(userDataFull?.email);
            setInputFirstName(userDataFull?.first_name);
            setInputLastName(userDataFull?.last_name);
            setInputDate(userDataFull?.birthday);
            setInputPhone(userDataFull?.phone);
            setInputTelegram(userDataFull?.telegram);
            setInputTags(userDataFull?.tags);
            setInputInfo(userDataFull?.info);
        }
    }, [userDataFull]);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(getTags());
    }, []);
    const tags = useSelector(selectTags);

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

    const changeTelegram = (e) => {
        setInputTelegram(e.target.value);
    };

    const changeTelegramClear = () => {
        setInputTelegram("");
    };

    const changePhone = (e) => {
        setInputPhone(e.target.value);
    };

    const changePhoneClear = () => {
        setInputPhone("");
    };

    const objtags = inputTags?.map((item) => {
        return item.id;
    });

    const disabled =
        inputEmail?.length === 0 ||
        inputEmail === null ||
        inputFirstName?.length === 0 ||
        inputFirstName === null ||
        inputLastName?.length === 0 ||
        inputLastName === null ||
        inputDate?.length === 0 ||
        inputDate === null ||
        inputPhone?.length < 11 ||
        inputPhone === null;

    const change = () => {
        dispatch(
            data({
                id: userDataFull.id,
                email: inputEmail,
                first_name: inputFirstName,
                last_name: inputLastName,
                birthday: inputDate,
                phone: inputPhone,
                telegram: inputTelegram,
                tags: objtags,
                info: inputInfo,
            }),
        )
            .then(() => {
                dispatch(getMeFull(String(userData.id_profile)));
                dispatch(getMe());
                dispatch(getAnotherFull(String(userData.id_profile)));
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            })
            .catch(() => {
                dispatch(getMeFull(String(userData.id_profile)));
                dispatch(getMe());
                dispatch(getAnotherFull(String(userData.id_profile)));
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            });
    };

    console.log(success);

    return (
        <>
            <div className={styles["wrapper"]}>
                {success ? (
                    <div className={styles["modal"]}>
                        <Message>Данные успешно измненены!</Message>
                    </div>
                ) : null}
                <div className={styles["header"]}>
                    <div className={styles["header__title"]}>Заполните данные</div>
                    <div className={styles["header__zagolovok"]}>Обновите или добавьте данные профиля, чтобы настроить индивидуальный поиск мероприятий.</div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите email"} label={"Email"} onChange={changeEmail} changeClear={changeEmailClear} value={inputEmail} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите имя"} label={"Имя"} onChange={changeFirstName} changeClear={changeFirstNameClear} value={inputFirstName} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите фамилию"} label={"Фамилия"} onChange={changeLastName} changeClear={changeLastNameClear} value={inputLastName} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDate placeholder={"Выберете дату"} label={"Дата рождения"} type={"date"} onChange={changeDate} changeClear={changeDateClear} value={inputDate} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText
                            placeholder={"Введите номер телефона"}
                            type="phone"
                            label={"Номер телефона"}
                            onChange={changePhone}
                            changeClear={changePhoneClear}
                            value={inputPhone}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите Telegram ID"} label={"Telegram ID"} onChange={changeTelegram} changeClear={changeTelegramClear} value={inputTelegram} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDropdownTags multiple value={inputTags} onChange={setInputTags} options={tags} label={"Теги пользователя"} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputAria placeholder={"Введите информация"} label={"Информация"} type={"text"} onChange={changeInfo} value={inputInfo} />
                    </div>
                    <div className={styles["body__btn"]}>
                        <Button type="default" onClick={change} disabled={disabled}>
                            Сохранить
                        </Button>
                        {userDataFull?.birthday !== null && inputDate?.length !== 0 ? (
                            <Button type="white" onClick={() => router.push(`/profile/${userData?.id_profile}`)}>
                                Назад
                            </Button>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Data;
