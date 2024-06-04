import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import Button from "../../buttons/Button";
import InputText from "../../inputs/inputText";
import { useSelector } from "react-redux";
import { createMeeting, getTags, getTimetable, selectErrorsMeeting, selectPlace, selectTags, selectTimetable } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import InputAria from "../../inputs/inputAria";
import { InputDropdownTags } from "../../inputs/InputDropdown/Tags";
import { InputDropdownTimetable } from "../../inputs/InputDropdown/Timetable";
import { getMeFull, selectUser } from "../../store/slice/authSlice";
import Message from "../../Message";
import UploadPhoto from "../../UploadPhoto";
import useDebounce from "@/hooks/useDebounce";

const ModalCreateMeeting = (props) => {
    const { switchModalCreateMeeting, switchModalCreateTimetable } = props;
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const [inputTitle, setInputTitle] = useState<string>("");
    const [inputBody, setInputBody] = useState<string>("");
    const [inputTimetable, setInputTimetable] = useState<any>([]);
    const [inputTags, setInputTags] = useState<any>([]);
    const [inputPhoto, setInputPhoto] = useState<string>("");
    const [inputSearchTags, setInputSearchTags] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsMeeting);

    const changeSearchHandler = useDebounce((value) => {
        setInputSearchTags(value || "");
    }, 700);

    const changeSearch = (e) => {
        changeSearchHandler(e.target.value);
    };

    const changeLoginSearch = (e) => {
        changeSearchHandler("");
    };

    useEffect(() => {
        dispatch(getTimetable());
    }, []);

    useEffect(() => {
        dispatch(getTags({ search: inputSearchTags }));
    }, [inputSearchTags]);

    const tags = useSelector(selectTags);

    const timetable = useSelector(selectTimetable);

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

    const objtags = inputTags.map((item) => {
        return item.id;
    });

    const changeCreateMeeting = () => {
        dispatch(createMeeting({ title: inputTitle, body: inputBody, timetable: inputTimetable.id, tags: objtags, meeting_pic: inputPhoto })).then((res) => {
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

    const disabled = inputTitle.length === 0 || inputTimetable.length === 0 || inputTimetable.length === 0 || inputPhoto.length === 0;

    return (
        <>
            {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.detail != null ? messageError?.detail : "Мероприятие успешно создано!"}</Message>
                </div>
            ) : null}
            <ModalBase
                title={"Создать мероприятие"}
                onCloseModal={switchModalCreateMeeting}
                size="large"
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
                        <InputDropdownTags
                            multiple
                            value={inputTags}
                            onChange={setInputTags}
                            options={tags}
                            label={"Теги мероприятия"}
                            changeSearch={changeSearch}
                            changeLoginSearch={changeLoginSearch}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputAria placeholder={"Введите информацию о мероприятии"} label={"Информация о мероприятии"} type={"text"} onChange={changeBody} />
                    </div>
                    <div className={styles["body__input"]}>
                        <UploadPhoto inputPhoto={inputPhoto} setInputPhoto={setInputPhoto} />
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalCreateMeeting;
