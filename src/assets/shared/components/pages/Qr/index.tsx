import React, { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import styles from "./index.module.scss";
import Scanner from "/public/icons/scanner.svg";
import ProfileScanner from "/public/icons/profilescanner.svg";
import List from "/public/icons/list.svg";
import QrGuest from "./components/QrMeeting";
import QrMeeting from "./components/QrGuest";
import clsx from "clsx";
import { useDispatch, useSelector } from "../../store/hooks";
import { getAnotherFull, selectLoadingUser, selectLoadingUserFullAnother, selectUser, selectUserFull, selectUserFullAnother } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";
import { getEvent, joinEvent, joinEventQR, joinQR, selectEventProps } from "../../store/slice/eventSlice";
import { useRouter } from "next/router";
import Message from "../../Message";
import Loader from "../../Loader";
interface Idevices {
    cameraId: string;
    deviceId: string;
    devices: Array<MediaDeviceInfo>;
    loading: boolean;
}

const Qr = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userDataFullAnother = useSelector(selectUserFullAnother);
    const userDataFull = useSelector(selectUserFull);
    const [dontShow, setDontShow] = useState<boolean>(true);
    const [data, setData] = useState<any>({});
    const [devices, setDevices] = useState<Idevices | Record<string, string>>({});
    const [qrReaderVisible, setQrReaderVisible] = useState<boolean>(true);
    const [registration, setRegistration] = useState<boolean>(false);
    const [currentCameraId, setCurrentCameraId] = useState<string>();
    const [title, setTitle] = useState<string>("Сканер");
    const [scanner, setScanner] = useState<boolean>(true);
    const [guest, setGuest] = useState<boolean>(false);
    const [events, setEvents] = useState<boolean>(false);
    const loading = useSelector(selectLoadingUser);
    const loadingAnother = useSelector(selectLoadingUserFullAnother);
    const userData = useSelector(selectUser);

    const switchScanner = () => {
        setTitle("Сканер");
        setScanner(true);
        setGuest(false);
        setEvents(false);
        refresh();
    };
    const switchGuest = () => {
        setTitle("Участники");
        setScanner(false);
        setGuest(true);
        setEvents(false);
        refresh();
    };
    const switchEvents = () => {
        setTitle("Мероприятия");
        setScanner(false);
        setGuest(false);
        setEvents(true);
        refresh();
    };

    const handleScan = (e) => {
        if (e?.text) {
            setData(e);
            dispatch(getAnotherFull(String(data.text)));
        }
    };

    // useEffect(() => {
    //     if (currentCameraId) {
    //         setTimeout(() => {
    //             refresh();
    //         }, 500);
    //     }
    // }, []);

    // useEffect(() => {
    //     const id = location.pathname.split("/").filter((el) => el)[1];
    //     dispatch(getEvent(String(id)));
    // }, []);

    const event = useSelector(selectEventProps);

    // useEffect(() => {
    //     if (Object.keys(data).length !== 0) {
    //         dispatch(getAnotherFull(String(data.text)));
    //     }
    // }, [data]);

    const refresh = () => {
        changeCamera(currentCameraId);
    };

    const handleError = (err) => {
        console.error(err);
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true }).then(() => {
            const a = "enumerateDevices";
            navigator["mediaDevices"]
                [a]()
                .then((devices) => {
                    const videoSelect: Array<MediaDeviceInfo> = [];
                    devices.forEach((device) => {
                        if (device.kind === "videoinput") {
                            videoSelect.push(device);
                        }
                    });
                    return videoSelect;
                })
                .then((devices) => {
                    setDevices({
                        cameraId: devices.length == 1 ? devices[0].deviceId : devices[1].deviceId,
                        deviceId: devices.length == 1 ? devices[0].deviceId : devices[1].deviceId,
                        devices,
                        loading: false,
                    });
                    setCurrentCameraId(devices.length == 1 ? devices[0].deviceId : devices[1].deviceId);
                });
            setDontShow(false);
        });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
    }, []);

    const changeCamera = (cameraId) => {
        setData({});
        setCurrentCameraId(cameraId);
        setQrReaderVisible(false);
        setTimeout(() => {
            setQrReaderVisible(true);
            setDevices({
                ...devices,
                cameraId,
            });
        }, 100);
    };

    const registrationGuest = () => {
        dispatch(joinEventQR({ id: userDataFullAnother?.id, meetings: event.id })).then(() => {
            setRegistration(true);
            dispatch(getAnotherFull(String(data.text)));
            setTimeout(() => {
                refresh();
                setRegistration(false);
            }, 5000);
        });
    };

    const back = () => {
        refresh();
        setScanner(true);
    };

    const found = userDataFullAnother?.meetings?.find((el) => {
        return el.id === event.id;
    });

    if (dontShow) return null;

    return (
        <>
            {loading ? <Loader /> : null}
            {/* {event?.detail || Number(userData.id) !== event?.author ? (
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
            ) : ( */}
            <div className={styles["container"]}>
                <div className={styles["header"]}>
                    <span className={styles["header__label"]}>{title}</span>
                </div>
                {registration ? (
                    <div className={styles["modal"]}>
                        <Message>Пользователь успешно зарегестрирован!</Message>
                    </div>
                ) : null}
                <QrReader
                    className={guest || events ? styles["scanner__inactive"] : styles["scanner"]}
                    onScan={handleScan}
                    delay={500}
                    onError={handleError}
                    constraints={
                        devices.cameraId && {
                            audio: false,
                            video: { deviceId: devices.cameraId },
                        }
                    }
                />

                {events ? (
                    <div className={styles["content__guests"]}>
                        <QrGuest />
                    </div>
                ) : null}
                {guest ? (
                    <div className={styles["content__meeting"]}>
                        <QrMeeting />
                    </div>
                ) : null}
                {data.text ? (
                    <>
                        {loading || loadingAnother ? <Loader /> : null}
                        <div className={styles["content__guest"]}>
                            {!userDataFullAnother?.detail ? (
                                <>
                                    <div className={styles["wrapper"]}>
                                        {/* <div className={styles["guest"]}> */}
                                        <div className={styles["content__guest__list"]}>
                                            <div className={styles["content__guest__list__header"]}>Участник</div>
                                            <div className={styles["content__guest__list__item"]}>
                                                <div className={styles["content__guest__list__item__header"]}>Имя</div>
                                                <span className={styles["content__guest__list__item__text"]}>{userDataFullAnother?.first_name}</span>
                                            </div>
                                            <div className={styles["content__guest__list__item"]}>
                                                <div className={styles["content__guest__list__item__header"]}>Фамилия</div>
                                                <span className={styles["content__guest__list__item__text"]}>{userDataFullAnother?.last_name}</span>
                                            </div>
                                            <div className={styles["content__guest__list__item"]}>
                                                <div className={styles["content__guest__list__item__header"]}>Email</div>
                                                <span className={styles["content__guest__list__item__text"]}>{userDataFullAnother?.email}</span>
                                            </div>

                                            <div className={styles["content__guest__list__item"]}>
                                                <div className={styles["content__guest__list__item__header"]}>Дата рождемения</div>
                                                <span className={styles["content__guest__list__item__text"]}>{userDataFullAnother?.birthday}</span>
                                            </div>
                                            {userDataFullAnother?.phone !== null ? (
                                                <div className={styles["content__guest__list__item"]}>
                                                    <div className={styles["content__guest__list__item__header"]}>Номер телефона</div>
                                                    <span className={styles["content__guest__list__item__text"]}>{userDataFullAnother?.phone}</span>
                                                </div>
                                            ) : null}
                                            {userDataFullAnother?.telegram !== null ? (
                                                <div className={styles["content__guest__list__item"]}>
                                                    <div className={styles["content__guest__list__item__header"]}>Telegram ID</div>
                                                    <span className={styles["content__guest__list__item__text"]}>{userDataFullAnother?.telegram}</span>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className={styles["guest__btn"]}>
                                            <Button type="default" disabled={found} onClick={registrationGuest}>
                                                {!found ? `Зарегистрировать` : event.seats_bool ? `Пользователь зарегистрирован` : `Мест нет`}
                                            </Button>
                                            <Button type="white" onClick={back}>
                                                Назад
                                            </Button>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </>
                            ) : (
                                <div className={styles["wrapper"]}>
                                    <div className={styles["error"]}>{userDataFullAnother?.detail}</div>
                                </div>
                            )}
                        </div>
                    </>
                ) : null}
                <div className={styles["footer"]}>
                    <div className={styles["footer__elements"]}>
                        <div className={styles["footer__elements__link"]} onClick={switchGuest}>
                            <div className={styles["footer__elements__icon"]}>
                                <ProfileScanner className={guest ? styles[`icon__active`] : styles[`icon__inactive`]} />
                            </div>
                            <span className={clsx(styles["footer__elements__text"], guest ? styles["footer__elements__text__active"] : styles["footer__elements__text__inactive"])}>
                                Участники
                            </span>
                        </div>
                        <div className={styles["footer__elements__link"]} onClick={switchScanner}>
                            <div className={styles["footer__elements__icon"]}>
                                <Scanner className={scanner ? styles[`icon__active`] : styles[`icon__inactive`]} />
                            </div>
                            <span
                                className={clsx(styles["footer__elements__text"], scanner ? styles["footer__elements__text__active"] : styles["footer__elements__text__inactive"])}
                            >
                                Сканер
                            </span>
                        </div>
                        <div className={styles["footer__elements__link"]} onClick={switchEvents}>
                            <div className={styles["footer__elements__icon"]}>
                                <List className={events ? styles[`icon__active`] : styles[`icon__inactive`]} />
                            </div>
                            <span
                                className={clsx(styles["footer__elements__text"], events ? styles["footer__elements__text__active"] : styles["footer__elements__text__inactive"])}
                            >
                                Мероприятия
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default Qr;
