import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../store/hooks";
import { getEvent, joinEvent, removeEvent, selectEventProps } from "../../../store/slice/eventSlice";
import Button from "../../../buttons/Button";
import Tag from "../../../Tag";
import { getMeFull, selectUser, selectUserFull } from "../../../store/slice/authSlice";
import ModalUnauth from "../../../modal/ModalUnauth";
import ModalRemoveMeeting from "../../../modal/ModalRemoveMeeting";
import Message from "../../../Message";

const MeetingView = (props) => {
    const [modalUnlogin, setModalUnlogin] = useState<boolean>(false);
    const [modalRemove, setModalRemove] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const dispatch = useDispatch();
    const router = useRouter();
    const event = useSelector(selectEventProps);
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);
    console.log(event);

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
    }, []);

    const switchModalUnlogin = () => {
        if (modalUnlogin) {
            setModalUnlogin(false);
            document.body.style.overflow = "visible";
        } else {
            setModalUnlogin(true);
            document.body.style.overflow = "hidden";
        }
    };
    const switchModalRemove = () => {
        if (modalRemove) {
            setModalRemove(false);
            document.body.style.overflow = "visible";
        } else {
            setModalRemove(true);
            document.body.style.overflow = "hidden";
        }
    };

    const join = () => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            dispatch(joinEvent({ id: userDataFull?.id, meetings: id }))
                .then(() => {
                    dispatch(getEvent(String(event.id)));
                    dispatch(getMeFull(String(userData.id_profile)));
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 2000);
                })
                .catch(() => {
                    dispatch(getEvent(String(event.id)));
                    dispatch(getMeFull(String(userData.id_profile)));
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 2000);
                });
        } else {
            switchModalUnlogin();
        }
    };

    const remove = () => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            dispatch(removeEvent({ id: userDataFull?.id, meetings: id }))
                .then(() => {
                    dispatch(getEvent(String(event.id)));
                    dispatch(getMeFull(String(userData.id_profile)));
                    switchModalRemove();
                })
                .catch(() => {
                    dispatch(getEvent(String(event.id)));
                    dispatch(getMeFull(String(userData.id_profile)));
                    switchModalRemove();
                });
        } else {
            switchModalUnlogin();
        }
    };

    const found = userDataFull?.meetings?.find((el) => {
        return el.id === Number(location.pathname.split("/").filter((el) => el)[1]);
    });

    return (
        <>
            {modalUnlogin ? <ModalUnauth switchModal={switchModalUnlogin} /> : null}
            {modalRemove ? <ModalRemoveMeeting switchModal={switchModalRemove} remove={remove} /> : null}
            {event?.error ? (
                <div className={styles["message"]}>
                    <span className={styles["message__text"]}>{event?.error}</span>
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
                            <Message>Вы успешно записаны на мероприятие!</Message>
                        </div>
                    ) : null}
                    <div className={styles["wrapper"]}>
                        <div className={styles["header"]}>
                            <div className={styles["img"]}>
                                <Image className={styles["img__img"]} src={Room} alt="class" />
                            </div>
                            <div className={styles["header__main"]}>
                                <div className={styles["header__main__title"]}>{event.title}</div>
                                <div className={styles["header__main__name"]}>
                                    <div className={styles["header__main__name__time"]}>Время проведения</div>
                                    <div className={styles["header__main__name__place"]}>Место проведения</div>
                                    <div className={styles["header__main__name__date"]}>Дата проведения</div>
                                    <div className={styles["header__main__name__date"]}>Колличество мест</div>
                                </div>
                                <div className={styles["header__main__info"]}>
                                    <div className={styles["header__main__info__time"]}>
                                        {event?.timetable?.start_time} – {event?.timetable?.end_time}
                                    </div>
                                    <div className={styles["header__main__info__place"]}>{event?.timetable?.place.office}</div>
                                    <div className={styles["header__main__info__date"]}>{event?.timetable?.event_date}</div>
                                    <div className={styles["header__main__info__date"]}>{event?.seats !== 0 ? event?.seats : "Запись закрыта, все места заняты"}</div>
                                </div>
                            </div>
                        </div>
                        {found !== undefined ? (
                            userDataFull.id === event.author ? (
                                <div className={styles["record"]}>Вы организатор данного мероприятия</div>
                            ) : (
                                <div className={styles["record"]}>Вы записаны на данное мероприятие</div>
                            )
                        ) : (
                            <div className={styles["empty"]}></div>
                        )}
                        <div className={styles["main"]}>
                            <div className={styles["main__tag"]}>{event?.tags?.map((value, key) => <Tag key={key} value={value} myKey={key} />)}</div>
                            <div className={styles["main__btn"]}>
                                {found !== undefined ? (
                                    userDataFull.id === event.author ? (
                                        <Button type="default" onClick={() => join()} disabled={true}>
                                            Вы организатор
                                        </Button>
                                    ) : (
                                        <Button type="default" onClick={() => switchModalRemove()}>
                                            Отменить запись
                                        </Button>
                                    )
                                ) : (
                                    <Button type="default" onClick={() => join()} disabled={!event?.seats_bool}>
                                        {!event?.seats_bool ? "Все места заняты" : "Записаться"}
                                    </Button>
                                )}
                            </div>
                        </div>
                        {event?.body !== "" ? (
                            <div className={styles["info"]}>
                                <div className={styles["info__title"]}>Информация о мероприятии</div>
                                <div className={styles["info__text"]}>{event?.body}</div>
                            </div>
                        ) : null}
                    </div>
                </>
            )}
        </>
    );
};
export default MeetingView;
