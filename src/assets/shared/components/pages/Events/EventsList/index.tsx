import React, { useState } from "react";
import styles from "./index.module.scss";
import EventItem from "../EventsItem";
import Link from "next/link";

const EventList = () => {
    return (
        <div className={styles["list"]}>
            <EventItem />
        </div>
    );
};
export default EventList;
