import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../store/hooks";
import {
    deleteEvents,
    editEvents,
    getEvent,
    getGuest,
    getTags,
    selectErrorsEditEvents,
    selectEventProps,
    selectGuest,
    selectLoadingMeeting,
    selectTags,
} from "../../../store/slice/eventSlice";
import { selectLoadingUser, selectUser, selectUserFull } from "../../../store/slice/authSlice";
import InputText from "../../../inputs/inputText";
import InputAria from "../../../inputs/inputAria";
import Button from "../../../buttons/Button";
import CreateMeetingViewItem from "./components/CreateMeetingViewItem";
import CreateMeetingViewHeader from "./components/CreateMeetingViewHeader";
import ModalEditTimetable from "../../../modal/ModalEditTimetable";
import { InputDropdownTags } from "../../../inputs/InputDropdown/Tags";
import Message from "../../../Message";
import Loader from "../../../Loader";

const CreateMeetingView = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const event = useSelector(selectEventProps);
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);
    const [inputTitle, setInputTitle] = useState<string>(event.title);
    const [inputBody, setInputBody] = useState<string>(event.body);
    const [inputTags, setInputTags] = useState<any>(event.tags);
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsEditEvents);
    const loadingMeeting = useSelector(selectLoadingMeeting);
    const loadingUser = useSelector(selectLoadingUser);

    console.log(messageError);

    console.log(event);

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
        dispatch(getGuest(String(id)));
        dispatch(getTags());
    }, []);

    const tags = useSelector(selectTags);

    const guest = useSelector(selectGuest);

    useEffect(() => {
        if (event) {
            // dispatch(getEvent(String(event.id)));
            setInputTitle(event.title);
            setInputBody(event.body);
            setInputTags(event.tags);
        }
    }, [event]);

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    const changeBody = (e) => {
        setInputBody(e.target.value);
    };

    const changeData = () => {
        dispatch(editEvents({ id: event.id, author: userDataFull.id, title: inputTitle, body: inputBody })).then((res) => {
            if (res.type.includes("fulfilled")) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
                dispatch(getEvent(String(event.id)));
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
                dispatch(getEvent(String(event.id)));
            }
        });
    };

    const deleteMeeting = () => {
        dispatch(deleteEvents({ id: event.id })).then(() => {
            router.push("/mymeeting");
        });
    };

    const switchModalEdit = () => {
        if (modalEdit) {
            setModalEdit(false);
            document.body.style.overflow = "visible";
            dispatch(getEvent(String(event.id)));
        } else {
            setModalEdit(true);
            document.body.style.overflow = "hidden";
            // dispatch(getEvent(String(event.id)));
        }
    };

    return (
        <>
            {loadingMeeting || loadingUser ? <Loader /> : null}
            {event?.detail || userDataFull?.id !== event?.author ? (
                <div className={styles["message"]}>
                    <span className={styles["message__text"]}>
                        {event?.detail ? event?.detail : userDataFull?.id !== event?.author ? `У вас нет доступа к этому мероприятию` : ""}
                    </span>
                    <div className={styles["message__btn"]}>
                        <Button onClick={() => router.push("/")} type="default">
                            Вернуться на главную
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    {success ? (
                        <div className={styles["modal"]}>
                            <Message error={messageError}>{messageError?.title != null ? "Название мероприятия не может быть пустым" : "Данные успешно изменены!"}</Message>
                        </div>
                    ) : null}
                    {modalEdit ? <ModalEditTimetable switchModalEdit={switchModalEdit} event={event} /> : null}
                    <div className={styles["wrapper"]}>
                        <div className={styles["body"]}>
                            <div className={styles["body__title"]}>
                                <span>{event.title}</span>
                            </div>
                            <div className={styles["body__input"]}>
                                <InputText
                                    placeholder={"Введите название мероприятия"}
                                    label={"Название мероприятия"}
                                    onChange={changeTitle}
                                    changeClear={changeTitleClear}
                                    value={inputTitle}
                                />
                            </div>
                            <div className={styles["body__input"]}>
                                <InputDropdownTags multiple value={inputTags} onChange={setInputTags} options={tags} label={"Теги пользователя"} />
                            </div>
                            <div className={styles["body__input"]}>
                                <InputAria
                                    placeholder={"Введите информацию о мероприятии"}
                                    label={"Информация о мероприятии"}
                                    type={"text"}
                                    onChange={changeBody}
                                    value={inputBody}
                                />
                            </div>
                            <div className={styles["btn"]}>
                                <Button type="default" onClick={changeData}>
                                    Изменить
                                </Button>
                                <Button type="delete" onClick={deleteMeeting}>
                                    Удалить
                                </Button>
                            </div>
                            <div className={styles["timetable"]}>
                                <div className={styles["timetable__item"]}>
                                    <span className={styles["timetable__item__title"]}>Время проведения мероприятия</span>
                                    <span className={styles["timetable__item__text"]}>
                                        {event?.timetable?.start_time} - {event?.timetable?.end_time}
                                    </span>
                                </div>
                                <div className={styles["timetable__item"]}>
                                    <span className={styles["timetable__item__title"]}>Дата проведения мероприятия</span>
                                    <span className={styles["timetable__item__text"]}>{event?.timetable?.event_date}</span>
                                </div>
                                <div className={styles["timetable__item"]}>
                                    <span className={styles["timetable__item__title"]}>Место проведения мероприятия</span>
                                    <span className={styles["timetable__item__text"]}>
                                        {event?.timetable?.place?.office} ({event?.timetable?.place?.max_participant})
                                    </span>
                                </div>
                                <div className={styles["timetable__btn"]}>
                                    <Button type="default" onClick={switchModalEdit}>
                                        Изменить запись
                                    </Button>
                                </div>
                            </div>
                            <div className={styles["body__guest__header"]}>
                                <span className={styles["body__guest__header__title"]}>Список участников</span>
                                <div className={styles["body__guest__header__btn"]}>
                                    <Button type="default" onClick={() => router.push(`/scanner/${event.id}`)}>
                                        Сканнер
                                    </Button>
                                </div>
                            </div>
                            <div className={styles["body__guest__header__message"]}>Перейдите к сканеру, чтобы зарегистрировать новых участников.</div>
                            <div className={styles["body__guest"]}>
                                <CreateMeetingViewHeader>
                                    {guest?.profile_list?.map((value, key) => <CreateMeetingViewItem key={key} value={value} myKey={key} />)}
                                </CreateMeetingViewHeader>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default CreateMeetingView;