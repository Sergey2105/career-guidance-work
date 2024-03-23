import React, { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import styles from "./index.module.scss";
import Scanner from "/public/icons/scanner.svg";
import ProfileScanner from "/public/icons/profilescanner.svg";
import List from "/public/icons/list.svg";

interface Idevices {
    cameraId: string;
    deviceId: string;
    devices: Array<MediaDeviceInfo>;
    loading: boolean;
}

const Qr = () => {
    const [dontShow, setDontShow] = useState(true);
    const [data, setData] = useState<any>({});
    const [userData, setUserData] = useState({
        id: "",
    });
    const [devices, setDevices] = useState<Idevices | Record<string, string>>({});
    const [registration, setRegistration] = useState<boolean>(false);
    const [currentCameraId, setCurrentCameraId] = useState<string>();
    const [title, setTitle] = useState<string>("Сканер");
    const [scanner, setScanner] = useState<boolean>(true);
    const [guest, setGuest] = useState<boolean>(false);
    const [events, setEvents] = useState<boolean>(false);

    const switchScanner = () => {
        setTitle("Сканер");
        setScanner(true);
        setGuest(false);
        setEvents(false);
    };
    const switchGuest = () => {
        setTitle("Гости");
        setScanner(false);
        setGuest(true);
        setEvents(false);
    };
    const switchEvents = () => {
        setTitle("Мероприятия");
        setScanner(false);
        setGuest(false);
        setEvents(true);
    };

    const handleScan = (e) => {
        if (e?.text) {
            setData(e);
        }
    };

    console.log(data);

    const refresh = () => {
        changeCamera(currentCameraId);
        console.log(currentCameraId);
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
                        cameraId: devices[0].deviceId,
                        deviceId: devices[0].deviceId,
                        // cameraId: devices.length == 1 ? devices[0].deviceId : devices[1].deviceId,
                        // deviceId: devices.length == 1 ? devices[0].deviceId : devices[1].deviceId,
                        devices,
                        loading: false,
                    });
                    setCurrentCameraId(devices[0].deviceId);
                    // setCurrentCameraId(devices.length == 1 ? devices[0].deviceId : devices[1].deviceId);
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
        setScanner(false);
        setTimeout(() => {
            setScanner(true);
            setDevices({
                ...devices,
                cameraId,
            });
        }, 100);
    };

    const registrationGuest = () => {
        fetch("")
            .then((res) => res.json())
            .then(() => {
                refresh();
                setRegistration(true);
                setTimeout(() => {
                    refresh();
                    setRegistration(false);
                }, 3000);
            });
    };

    if (dontShow) return null;

    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <span className={styles["header__label"]}>{title}</span>
            </div>
            {!Object.keys(data || {}).length && scanner ? (
                <QrReader
                    className={styles["scanner"]}
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
            ) : null}
            {events ? <div className={styles["content"]}>events</div> : null}
            {guest ? <div className={styles["content"]}>guest</div> : null}
            {data.text ? (
                <div className={styles["content__guest"]}>
                    {/http/.test(data.text) ? (
                        <iframe src={data.text} />
                    ) : (
                        <>
                            <div>{data.text}</div>
                        </>
                    )}
                </div>
            ) : null}
            <div className={styles["footer"]}>
                <div className={styles["footer__elements"]}>
                    <div className={styles["footer__elements__link"]}>
                        <div className={styles["footer__elements__icon"]} onClick={switchGuest}>
                            <ProfileScanner />
                        </div>
                        <span className={styles["footer__elements__label"]}>Участники</span>
                    </div>
                    <div className={styles["footer__elements__link"]}>
                        <div className={styles["footer__elements__icon"]} onClick={switchScanner}>
                            <Scanner />
                        </div>
                        <span className={styles["footer__elements__label"]}>Сканер</span>
                    </div>
                    <div className={styles["footer__elements__link"]}>
                        <div className={styles["footer__elements__icon"]} onClick={switchEvents}>
                            <List />
                        </div>
                        <span className={styles["footer__elements__label"]}>Мероприятия</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qr;
