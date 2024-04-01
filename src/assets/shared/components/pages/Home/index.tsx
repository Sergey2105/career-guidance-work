import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Empowered from "/public/img/empowered.jpg";
import router from "next/router";
import ModalLogin from "../../modal/ModalLogin";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import EventItem from "../Meeting/MeetingItem";
import { useDispatch, useSelector } from "../../store/hooks";
import Swiper from "swiper";
import "swiper/css";
import Button from "../../buttons/Button";
import Loader from "../../Loader";
import { selectUserFull } from "../../store/slice/authSlice";

const HomePage = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const Mobile = useMediaQuery(375);
    const Tablet = useMediaQuery(768);
    const Laptop = useMediaQuery(1024);
    const Desktop = useMediaQuery(1360);
    const userDataFull = useSelector(selectUserFull);

    // if (typeof window !== "undefined") {
    // }

    const dispatch = useDispatch();

    return (
        <>
            {/* {!userDataFull.id ? (
                <Loader />
            ) : ( */}
            <div className={styles["home"]}>
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
                            {!userDataFull.id ? (
                                <Button type="default" onClick={() => router.push("/login")}>
                                    Присоединиться
                                </Button>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className={styles["home__events"]}>
                    <div className={styles["home__wrapper"]}>
                        {/* <div className={styles["home__events__item"]}>{events?.results?.map((value, key) => <EventItem key={key} value={value} myKey={key} />)}</div> */}
                        <div className={styles["home__events__btn"]}>
                            <Button type="default" onClick={() => router.push("/meeting")}>
                                Больше мероприятий
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles["home__wrapper"]}>
                    <div className={styles["home__join"]}>
                        <div className={styles["home__join__label"]}>
                            {/* Откройте мир профессиональных возможностей! Узнайте больше о наших мероприятиях и программе профориентации. Информация, которая поможет вам выбрать свое
                        будущее. */}
                            Исследуйте ваше профессиональное будущее с нашим разнообразным списком мероприятий! Открытие дверей к новым карьерным возможностям начинается здесь.
                            Узнайте о наших образовательных и профориентационных программ для осознанного выбора вашего пути в мире труда.
                        </div>
                        <div className={styles["home__join__btn"]}>
                            <Button type="default">Больше информации</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};
export default HomePage;
