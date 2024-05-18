import React, { useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import { useRouter } from "next/router";

const CreateMeetingViewItem = (props) => {
    const { value } = props;
    const router = useRouter();

    return (
        <>
            <div className={styles["item"]} onClick={() => router.push(`/profile/${value.id}`)}>
                <span>{value.first_name}</span>
                <span>{value.last_name}</span>
                <span>{`+7 ${value?.phone?.slice(1, 4)} ${value?.phone?.slice(4, 7)} ${value?.phone?.slice(7, 9)} ${value?.phone?.slice(9)}`}</span>
                <span>{value.telegram}</span>
            </div>
        </>
    );
};
export default CreateMeetingViewItem;
