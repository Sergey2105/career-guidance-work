import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Empowered from "/public/img/empowered.jpg";
import router from "next/router";
import EventItem from "../Meeting/MeetingItem";
import { useDispatch, useSelector } from "../../store/hooks";
import "swiper/css";
import Button from "../../buttons/Button";
import Loader from "../../Loader";
import { selectUserFull } from "../../store/slice/authSlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { fetchEvents, selectEvents } from "../../store/slice/eventsSlice";
import "@splidejs/react-splide/css";

const HomePage = () => {
    const userDataFull = useSelector(selectUserFull);

    useEffect(() => {
        dispatch(fetchEvents({ page: 1, search: "" }));
    }, []);

    const events = useSelector(selectEvents);

    const dispatch = useDispatch();

    return (
        <>
            <div className={styles["home"]}>
                <div className={styles["home__wrapper"]}>
                    <div className={styles["home__main"]}>
                        <div className={styles["home__main__label"]}>Твой календарь мероприятий, твой путь к профессиональному росту!</div>
                        <div>
                            <div className={styles["home__main__img"]}>
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
                        <div className={styles["home__events__item"]}>
                            <div className={styles["slider"]}>
                                <Splide
                                    options={{
                                        rewind: true,
                                        perPage: 2,
                                        mediaQuery: "min",
                                        breakpoints: {
                                            1440: {
                                                perPage: 2,
                                                gap: "20px",
                                            },
                                            1280: {
                                                perPage: 2,
                                                gap: "20px",
                                            },
                                            1024: {
                                                perPage: 2,
                                                gap: "16px",
                                            },
                                            768: {
                                                perPage: 2,
                                                gap: "12px",
                                            },
                                            480: {
                                                perPage: 2,
                                                gap: "12px",
                                            },
                                            375: {
                                                perPage: 1,
                                                gap: "12px",
                                            },
                                            1: {
                                                perPage: 1,
                                                gap: "12px",
                                            },
                                        },
                                    }}
                                >
                                    {events?.results?.map((value, key) => (
                                        <SplideSlide key={key}>
                                            <EventItem value={value} myKey={key} />
                                        </SplideSlide>
                                    ))}
                                </Splide>
                            </div>
                            <div className={styles["home__events__btn"]}>
                                <Button type="default" onClick={() => router.push("/meeting")}>
                                    Больше мероприятий
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["home__wrapper"]}>
                    <div className={styles["home__join"]}>
                        <div className={styles["home__join__label"]}>
                            Исследуйте ваше профессиональное будущее с нашим разнообразным списком мероприятий! Открытие дверей к новым карьерным возможностям начинается здесь.
                            Узнайте о наших образовательных и профориентационных программ для осознанного выбора вашего пути в мире труда.
                        </div>
                        <div className={styles["home__join__btn"]}>
                            <Button type="default">Больше информации</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomePage;
