import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import ButtonModal from "../../buttons/ButtonModal";
import Empowered from "/public/img/empowered.jpg";
import router from "next/router";
import ModalLogin from "../../modal/ModalLogin";
import ButtonLink from "../../buttons/ButtonLink";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fetchEvents, selectEvents } from "../../store/slice/eventsSlice";
import EventItem from "../Meeting/EventsItem";
import { useDispatch, useSelector } from "../../store/hooks";
import Swiper from "swiper";
import "swiper/css";

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
                            <Image className={styles["home__main__img__img"]} src={Empowered} alt="class" objectFit="contain" />
                        </div>
                    </div>
                    <div className={styles["home__main__btn"]}>
                        <ButtonModal label={"Присоединиться"} onClick={() => router.push("/login")} />
                    </div>
                </div>
            </div>
            <div className={styles["home__events"]}>
                <div className={styles["home__wrapper"]}>
                    {/* <div className={styles["home__events__item"]}>{events?.results?.map((value, key) => <EventItem key={key} value={value} myKey={key} />)}</div> */}
                </div>
                <div className={styles["home__events__btn"]} onClick={() => router.push("/meeting")}>
                    <ButtonLink label={"Больше мероприятий"} />
                </div>
            </div>
            <div className={styles["home__wrapper"]}>
                <div className={styles["home__join"]}>
                    <div className={styles["home__join__label"]}>
                        <span>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </span>
                    </div>
                    <div className={styles["home__join__btn"]}>
                        <ButtonLink label={"Больше информации"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
