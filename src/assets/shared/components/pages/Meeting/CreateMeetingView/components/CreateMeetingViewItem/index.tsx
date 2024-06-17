import React, { useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import { useRouter } from "next/router";
import { deleteGuest, getEvent } from "@/assets/shared/components/store/slice/eventSlice";
import { useDispatch } from "@/assets/shared/components/store/hooks";
import Cross from "/public/icons/cross.svg";

const CreateMeetingViewItem = (props) => {
    const { value, event } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    const deleteGuestRegister = () => {
        dispatch(deleteGuest({ meetings: event.id, id: value.id })).then(() => {
            dispatch(getEvent(String(event.id)));
        });
    };

    return (
        <>
            <div className={styles["item"]} onClick={() => router.push(`/profile/${value.id}`)}>
                <span>{value.first_name}</span>
                <span>{value.last_name}</span>
                <span>{`+7 ${value?.phone?.slice(1, 4)} ${value?.phone?.slice(4, 7)} ${value?.phone?.slice(7, 9)} ${value?.phone?.slice(9)}`}</span>
                <span>{value.telegram}</span>
                {/* <button className={styles["item__btn"]} onClick={deleteGuestRegister}>
                    <Cross />
                </button> */}
            </div>
        </>
    );
};
export default CreateMeetingViewItem;
