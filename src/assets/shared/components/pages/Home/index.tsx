import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Empowered from "/public/img/empowered.jpg";
import router from "next/router";
import ModalLogin from "../../modal/ModalLogin";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fetchEvents, selectEvents } from "../../store/slice/eventsSlice";
import EventItem from "../Meeting/MeetingsItem";
import { useDispatch, useSelector } from "../../store/hooks";
import Swiper from "swiper";
import "swiper/css";
import Button from "../../buttons/Button";

const HomePage = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const Mobile = useMediaQuery(375);
    const Tablet = useMediaQuery(768);
    const Laptop = useMediaQuery(1024);
    const Desktop = useMediaQuery(1360);

    const windowOpen = () => {
        setOpenLogin(true);
        document.body.style.overflow = "hidden";
    };
    const windowClose = () => {
        setOpenLogin(false);
        document.body.style.overflow = "";
    };

    const dispatch = useDispatch();
    const events = useSelector(selectEvents);

    useEffect(() => {
        dispatch(fetchEvents({ page: 1, search: "" }));
    }, []);

    return (
        <div className={styles["home"]}>
            {openLogin && <ModalLogin onCloseModal={windowClose} />}
            <div className={styles["home__wrapper"]}>
                <div className={styles["home__main"]}>
                    <div className={styles["home__main__label"]}>Твой календарь мероприятий, твой путь к профессиональному росту!</div>
                    <div>
                        <div className={styles["home__main__img"]}>
                            {/* <img src="/public/img/empowered.jpg" alt="Empowered" /> */}
                            <Image className={styles["home__main__img__img"]} src={Empowered} alt="class" />
                        </div>
                    </div>
                    <div className={styles["home__main__btn"]}>
                        <Button label={"Присоединиться"} onClick={() => router.push("/login")} />
                    </div>
                </div>
            </div>
            <div className={styles["home__events"]}>
                <div className={styles["home__wrapper"]}>
                    {/* <div className={styles["home__events__item"]}>{events?.results?.map((value, key) => <EventItem key={key} value={value} myKey={key} />)}</div> */}
                    <div className={styles["home__events__btn"]} onClick={() => router.push("/meeting")}>
                        <Button label={"Больше мероприятий"} />
                    </div>
                </div>
            </div>
            <div className={styles["home__wrapper"]}>
                <div className={styles["home__join"]}>
                    <div className={styles["home__join__label"]}>
                        {/* Откройте мир профессиональных возможностей! Узнайте больше о наших мероприятиях и программе профориентации. Информация, которая поможет вам выбрать свое
                        будущее. */}
                        Исследуйте ваше профессиональное будущее с нашим разнообразным списком мероприятий! Открытие дверей к новым карьерным возможностям начинается здесь. Узнайте
                        о наших образовательных и профориентационных программ для осознанного выбора вашего пути в мире труда.
                    </div>
                    <div className={styles["home__join__btn"]}>
                        <Button label={"Больше информации"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
