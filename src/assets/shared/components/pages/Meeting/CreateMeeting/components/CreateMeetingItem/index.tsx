import React, { useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import { useRouter } from "next/router";

const CreateMeetingItem = (props) => {
    const { value } = props;
    const router = useRouter();

    return (
        <>
            <div className={styles["item"]} onClick={() => router.push(`/mymeeting/${value.id}`)}>
                <span>{value.title}</span>
                <span>{value?.timetable.event_date}</span>
                <span>{value?.seats}</span>
                <span>
                    {value?.timetable.place.office} ({value?.timetable.place.max_participant})
                </span>
            </div>
        </>
    );
};
export default CreateMeetingItem;
