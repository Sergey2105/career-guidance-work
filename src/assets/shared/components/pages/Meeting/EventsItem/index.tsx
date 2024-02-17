import React, { useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import { useRouter } from "next/router";

const EventItem = (props) => {
    const { value } = props;
    const router = useRouter();

    return (
        <div className={styles["item"]} onClick={() => router.push(`/meeting/${value.id}`)}>
            <div className={styles["item__header"]}>
                <div className={styles["item__header__img"]}>
                    <Image className={styles["item__header__img__img"]} src={Room} alt={"room"} objectFit="contain" />
                </div>
                <div className={styles["item__header__date"]}>
                    <span>{value?.timetable.event_date}</span>
                </div>
            </div>
            <div className={styles["item__footer"]}>
                <span className={styles["item__footer__label"]}>{value.title}</span>
                <div className={styles["item__footer__location"]}>Место проведения: {value?.timetable.place.office}</div>
            </div>
        </div>
    );
};
export default EventItem;
