import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { getAnotherFull, logout, selectEventsUser, selectUserFull, selectUserFullAnother } from "../../store/slice/authSlice";
import Image from "next/image";
import Rock from "/public/img/johnson_dwayne.jpg";
import Button from "../../buttons/Button";
import Tag from "../../Tag";
import MeetingItem from "../Meeting/MeetingsItem";
import Loader from "../../Loader";

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const userDataFull = useSelector(selectUserFull);
    const userDataFullAnother = useSelector(selectUserFullAnother);

    const [login, setLogin] = useState<string>("");

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        setLogin(id);
        if (login !== "") dispatch(getAnotherFull(String(login)));
    }, [login]);

    console.log(userDataFullAnother);
    // useEffect(() => {
    //     const token = localStorage.getItem("userToken");
    // }, []);
    const logoutUser = () => {
        dispatch(logout()).then(() => {
            router.push("/");
        });
    };

    // useEffect(() => {
    //     const token = localStorage.getItem("userToken");
    //     if (token === null) {
    //         router.push("/register");
    //     }
    // }, []);

    return (
        <>
            {/* {!userDataFullAnother.id ? (
                <Loader />
            ) : ( */}
            <div className={styles["wrapper"]}>
                <div className={styles["body"]}>
                    <div className={styles["body__profile"]}>
                        <div>
                            <div className={styles["body__profile__img"]}>
                                <Image className={styles["body__profile__img__img"]} src={Rock} alt={"room"} objectFit="contain" />
                            </div>
                            <div className={styles["body__profile__info"]}>
                                <span className={styles["body__profile__info__title"]}>Имя</span>
                                <span className={styles["body__profile__info__text"]}>{userDataFullAnother?.first_name}</span>
                            </div>
                            <div className={styles["body__profile__info"]}>
                                <span className={styles["body__profile__info__title"]}>Фамилия</span>
                                <span className={styles["body__profile__info__text"]}>{userDataFullAnother?.last_name}</span>
                            </div>
                            <div className={styles["body__profile__info"]}>
                                <span className={styles["body__profile__info__title"]}>Email</span>
                                <span className={styles["body__profile__info__text"]}>{userDataFullAnother?.email}</span>
                            </div>
                            <div className={styles["body__profile__info"]}>
                                <span className={styles["body__profile__info__title"]}>Дата рождения</span>
                                <span className={styles["body__profile__info__text"]}>{userDataFullAnother?.birthday}</span>
                            </div>
                            {userDataFullAnother?.tags?.length !== 0 ? (
                                <div className={styles["body__profile__info"]}>
                                    <span className={styles["body__profile__info__title"]}>Теги</span>
                                    <div className={styles["body__profile__info__text"]}>
                                        {userDataFullAnother?.tags?.map((value, key) => <Tag key={key} value={value} myKey={key} />)}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        {login == userDataFull.id ? (
                            <>
                                <Button onClick={() => router.push("/data")} type="default">
                                    Изменить данные
                                </Button>
                                <Button onClick={logoutUser} type="white">
                                    Выйти
                                </Button>
                            </>
                        ) : null}
                        {/* Сообщение? */}
                    </div>
                    <div className={styles["body__info"]}>
                        <div className={styles["body__info__title"]}>Мои записи на мероприятия</div>
                        <div className={styles["body__info__list"]}>{userDataFullAnother?.meetings?.map((value, key) => <MeetingItem key={key} value={value} myKey={key} />)}</div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};
export default Profile;
