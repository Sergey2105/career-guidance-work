import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputText from "../../inputs/inputText";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createMeeting, createTimetable, getPlaces, getTags, getTimetable, selectErrorsMeeting, selectPlace, selectTags, selectTimetable } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import InputAria from "../../inputs/inputAria";
import { InputDropdownTags } from "../../inputs/InputDropdown/Tags";
import { InputDropdownTimetable } from "../../inputs/InputDropdown/Timetable";
import { getMeFull, selectUser } from "../../store/slice/authSlice";
import Message from "../../Message";

const ModalCreateMeeting = (props) => {
    const { switchModalCreateMeeting, switchModalCreateTimetable } = props;
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const [inputTitle, setInputTitle] = useState<string>("");
    const [inputBody, setInputBody] = useState<string>("");
    const [inputTimetable, setInputTimetable] = useState<any>([]);
    const [inputTags, setInputTags] = useState<any>([]);
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsMeeting);
    console.log(messageError);

    const tags = useSelector(selectTags);

    useEffect(() => {
        dispatch(getTimetable());
        dispatch(getTags());
    }, []);

    const timetable = useSelector(selectTimetable);

    // console.log(timetable);

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    const changeBody = (e) => {
        setInputBody(e.target.value);
    };

    const changeBodyClear = () => {
        setInputBody("");
    };

    const router = useRouter();

    const objtags = inputTags.map((item) => {
        return item.id;
    });

    // console.log(objtags);

    const changeCreateMeeting = () => {
        dispatch(createMeeting({ title: inputTitle, body: inputBody, timetable: inputTimetable.id, tags: objtags })).then((res) => {
            if (res.type.includes("fulfilled")) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    switchModalCreateMeeting();
                    dispatch(getMeFull(String(userData.id_profile)));
                }, 2000);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            }
        });
    };

    const disabled = inputTitle.length === 0 || inputTimetable.length === 0 || inputTimetable.length === 0;

    return (
        <>
            {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.error != null ? messageError?.error : "Мероприятие успешно создано"}</Message>
                </div>
            ) : null}
            <ModalBase
                title={"Саздать мероприятие"}
                onCloseModal={switchModalCreateMeeting}
                size="large"
                // zIndex="60"
                footer={
                    <>
                        <Button type="white" onClick={switchModalCreateMeeting}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={changeCreateMeeting} disabled={disabled}>
                            Создать
                        </Button>
                    </>
                }
            >
                <div className={styles["body"]}>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите название мероприятия"} label={"Название мероприятия"} onChange={changeTitle} changeClear={changeTitleClear} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDropdownTimetable value={inputTimetable} onChange={setInputTimetable} options={timetable} label={"Запись мероприятия"} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDropdownTags multiple value={inputTags} onChange={setInputTags} options={tags} label={"Теги мероприятия"} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputAria placeholder={"Введите информацию о мероприятии"} label={"Информация о мероприятии"} type={"text"} onChange={changeBody} />
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalCreateMeeting;
