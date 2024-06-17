import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../store/hooks";
import {
    deleteEvents,
    deleteGuest,
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
import ModalCreateVoting from "../../../modal/ModalCreateVoting";
import Voting from "../../../Voting";
import UploadPhoto from "../../../UploadPhoto";
import QrShare from "../../../QrShare";
import QrCode from "../../../QrCode";
import useDebounce from "@/hooks/useDebounce";
import ModalDelete from "../../../modal/ModalDelete";

const CreateMeetingView = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const event = useSelector(selectEventProps);
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);
    const [inputTitle, setInputTitle] = useState<string>(event.title);
    const [inputBody, setInputBody] = useState<string>(event.body);
    const [inputTags, setInputTags] = useState<any>(event.tags);
    const [inputPhoto, setInputPhoto] = useState<string>("");
    const [inputSearchTags, setInputSearchTags] = useState<string>("");
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [modalVoting, setModalVoting] = useState<boolean>(false);
    const [modalEditVoting, setModalEditVoting] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsEditEvents);
    const loadingMeeting = useSelector(selectLoadingMeeting);
    const loadingUser = useSelector(selectLoadingUser);

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
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
        dispatch(getGuest(String(id)));
    }, []);

    useEffect(() => {
        dispatch(getTags({ search: inputSearchTags }));
    }, [inputSearchTags]);

    const tags = useSelector(selectTags);

    const guest = useSelector(selectGuest);

    useEffect(() => {
        if (event) {
            setInputTitle(event?.title);
            setInputBody(event?.body);
            setInputTags(event?.tags);
            setInputPhoto(event?.meeting_pic);
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

    const objtags = inputTags?.map((item) => {
        return item.id;
    });

    const changeData = () => {
        dispatch(editEvents({ id: event.id, author: userDataFull.id, title: inputTitle, body: inputBody, meeting_pic: inputPhoto, tags: objtags })).then((res) => {
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
        } else {
            setModalEdit(true);
            document.body.style.overflow = "hidden";
        }
    };

    const switchModalVoting = () => {
        if (modalVoting) {
            setModalVoting(false);
            document.body.style.overflow = "visible";
        } else {
            setModalVoting(true);
            document.body.style.overflow = "hidden";
        }
    };

    const switchModalDelete = () => {
        if (modalDelete) {
            setModalDelete(false);
            document.body.style.overflow = "visible";
        } else {
            setModalDelete(true);
            document.body.style.overflow = "hidden";
        }
    };

    const links = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${event?.id}/?source=qr`;

    return (
        <>
            {loadingMeeting || (loadingUser && userDataFull?.id) ? <Loader /> : null}
            {event?.detail || Number(userData.id) !== event?.author ? (
                <div className={styles["message"]}>
                    <span className={styles["message__text"]}>
                        {event?.detail
                            ? event?.detail
                            : Number(userData.id) !== event?.author
                              ? `У вас нет доступа к этому мероприятию`
                              : !userDataFull?.teacher_permission
                                ? "У вас нет прав для просмотра данной страницы"
                                : ""}
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
                            <Message error={messageError}>
                                {messageError?.title != null
                                    ? "Название мероприятия не может быть пустым!"
                                    : messageError?.meeting_pic != null
                                      ? "Необходимо добавить фото!"
                                      : "Данные успешно изменены!"}
                            </Message>
                        </div>
                    ) : null}
                    {modalDelete ? <ModalDelete switchModal={switchModalDelete} text={"Вы действительно хотите удалить мероприятие?"} deleteMeeting={deleteMeeting} /> : null}
                    {modalEdit ? <ModalEditTimetable switchModalEdit={switchModalEdit} event={event} /> : null}
                    {modalVoting ? <ModalCreateVoting switchModalVoting={switchModalVoting} event={event} /> : null}
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
                                <Button type="delete" onClick={switchModalDelete}>
                                    Удалить
                                </Button>
                            </div>
                            <div>
                                <UploadPhoto inputPhoto={inputPhoto} setInputPhoto={setInputPhoto} />
                            </div>
                            <div className={styles["timetable"]}>
                                <span className={styles["body__guest__header__title"]}>Запись</span>

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
                            <div className={styles["voting"]}>
                                <span className={styles["body__guest__header__title"]}>Список опросов</span>
                                {event?.voting?.length == 0 ? <span className={styles["body__guest__header__title__empty"]}>У вас нет созданных опросов</span> : null}
                                <div>
                                    <div className={styles["voting__list"]}>
                                        {event?.voting?.map((value, key) => <Voting voting={false} edit={true} key={key} value={value} myKey={key} />)}
                                    </div>
                                </div>
                                <Button type="default" onClick={switchModalVoting}>
                                    Создать опрос
                                </Button>
                            </div>
                            <div className={styles["qr"]}>
                                <div onClick={() => window.open(`/qrshare/${event.id}`, "_blank")}>
                                    <QrCode id={links} view={false} />
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
                                    {guest?.profile_list?.map((value, key) => <CreateMeetingViewItem key={key} value={value} myKey={key} event={event} />)}
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
