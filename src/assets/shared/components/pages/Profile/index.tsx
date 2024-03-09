import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { logout, selectUserFull } from "../../store/slice/authSlice";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import Button from "../../buttons/Button";
import Tag from "../../Tag";
import MeetingItem from "../Meeting/MeetingsItem";

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const userDataFull = useSelector(selectUserFull);

    const logoutUser = () => {
        dispatch(logout());
        router.push("/");
    };
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["body"]}>
                <div className={styles["body__profile"]}>
                    <div>
                        <div className={styles["body__profile__img"]}>
                            <Image className={styles["body__profile__img__img"]} src={Room} alt={"room"} objectFit="contain" />
                        </div>
                        <div className={styles["body__profile__info"]}>
                            <span className={styles["body__profile__info__title"]}>Имя</span>
                            <span className={styles["body__profile__info__text"]}>{userDataFull?.first_name}</span>
                        </div>
                        <div className={styles["body__profile__info"]}>
                            <span className={styles["body__profile__info__title"]}>Фамилия</span>
                            <span className={styles["body__profile__info__text"]}>{userDataFull?.last_name}</span>
                        </div>
                        <div className={styles["body__profile__info"]}>
                            <span className={styles["body__profile__info__title"]}>Email</span>
                            <span className={styles["body__profile__info__text"]}>{userDataFull?.email}</span>
                        </div>
                        <div className={styles["body__profile__info"]}>
                            <span className={styles["body__profile__info__title"]}>Дата рождения</span>
                            <span className={styles["body__profile__info__text"]}>{userDataFull?.birthday}</span>
                        </div>
                        <div className={styles["body__profile__info"]}>
                            <span className={styles["body__profile__info__title"]}>Теги</span>
                            <div className={styles["body__profile__info__text"]}>{userDataFull?.tags?.map((value, key) => <Tag key={key} value={value} myKey={key} />)}</div>
                        </div>
                    </div>
                    <Button onClick={logoutUser} label={"Изменить профиль"} />
                    <form onSubmit={logoutUser}>
                        <Button onClick={logoutUser} label={"Выйти"} />
                    </form>
                </div>
                <div className={styles["body__info"]}></div>
                {/* <div className={styles["list__list"]}>{userDataFull?.meetings?.map((value, key) => <MeetingItem key={key} value={value} myKey={key} />)}</div> */}
            </div>
        </div>
    );
};
export default Profile;
