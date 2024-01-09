import React, { useState } from "react";
import styles from "./index.module.scss";
import EventItem from "../EventsItem";
import Link from "next/link";

const EventList = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    return (
        <div className={styles["list"]}>
            <div className={styles["list__list"]}>
                <EventItem width={360} height={200} />
                <EventItem width={360} height={200} />
                <EventItem width={360} height={200} />
            </div>
        </div>
    );
};
export default EventList;
