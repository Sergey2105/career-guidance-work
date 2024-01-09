import React, { useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Room from "/public/img/room.jpg";

const EventItem = (props: { width: any; height: any }) => {
    const { width, height } = props;
    return (
        <div className={styles["item"]}>
            <div className={styles["item__header"]}>
                <div className={styles["item__header__img"]}>
                    <Image src={Room} alt={"room"} width={width} height={height} className={styles["item__header__img__img"]} />
                </div>
                <div className={styles["item__header__date"]}>
                    <span>10 декабря 2023 года</span>
                </div>
            </div>
            <div className={styles["item__footer"]}>
                <span className={styles["item__footer__label"]}>Название</span>
                <span className={styles["item__footer__location"]}>Место проведения</span>
            </div>
        </div>
    );
};
export default EventItem;
