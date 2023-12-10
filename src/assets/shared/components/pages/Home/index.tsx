import React, { useState } from "react";
import styles from "./index.module.scss";
import EventItem from "../Events/EventsItem";
import ButtonModal from "../../buttons/buttonModal";
import ButtonConfirm from "../../buttons/buttonConfirm";
import ButtonArrowLeft from "../../buttons/buttonsArrowLeft";
import ButtonArrowRight from "../../buttons/buttonsArrowRight";

const HomePage = () => {
    return (
        <div className={styles["home"]}>
            <div className={styles["home__wrapper"]}>
                <div className={styles["home__main"]}>
                    <div className={styles["home__main__label"]}>
                        <span>Твой календарь мероприятий, твой путь к профессиональному росту!</span>
                    </div>
                    <div className={styles["home__main__btn"]}>
                        <ButtonModal label={"Перейти"} />
                    </div>
                    <div className={styles["home__main__img"]}></div>
                </div>
            </div>
            <div className={styles["home__events"]}>
                <div className={styles["home__wrapper"]}>
                    <div className={styles["home__events__left"]}>
                        <ButtonArrowLeft />
                    </div>
                    <div className={styles["home__events__right"]}>
                        <ButtonArrowRight />
                    </div>
                    <div className={styles["home__events__item"]}>
                        <EventItem />
                        <EventItem />
                    </div>
                </div>
                <div className={styles["home__events__btn"]}>
                    <ButtonModal label={"Больше мероприятий"} />
                </div>
            </div>
            <div className={styles["home__join"]}>
                <div className={styles["home__wrapper"]}>
                    <div className={styles["home__join__label"]}>
                        <span>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </span>
                    </div>
                    <div className={styles["home__join__btn"]}>
                        <ButtonConfirm label={"Присоедениться"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
