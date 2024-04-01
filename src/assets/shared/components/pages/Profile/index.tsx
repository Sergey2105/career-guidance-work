import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { getAnotherFull, logout, selectErrors, selectUser, selectUserFull, selectUserFullAnother } from "../../store/slice/authSlice";
import Image from "next/image";
import Rock from "/public/img/johnson_dwayne.jpg";
import Button from "../../buttons/Button";
import Tag from "../../Tag";
import MeetingItem from "../Meeting/MeetingItem";
import Loader from "../../Loader";
import { useGetUserQuery } from "../../store/services/getUser";

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { query } = router;
    const userData = useSelector(selectUser);

    const [currentProfile, setCurrentProfile] = useState<boolean>(true);
    const userDataFullAnother = useSelector(selectUserFullAnother);

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getAnotherFull(String(id)));
    }, []);

    useEffect(() => {
        if (userData?.id_profile === String(userDataFullAnother?.id)) {
            setCurrentProfile(true);
        } else {
            setCurrentProfile(false);
        }
    }, [userDataFullAnother]);

    const logoutUser = () => {
        dispatch(logout()).then(() => {
            router.push("/");
        });
    };

    return (
        <>
            {!userDataFullAnother ? <Loader /> : null}
            {userDataFullAnother?.error ? (
                <div className={styles["message"]}>
                    <span className={styles["message__text"]}>{userDataFullAnother?.error}</span>
                    <div className={styles["message__btn"]}>
                        <Button onClick={() => router.push("/")} type="default">
                            Вернуться на главную
                        </Button>
                    </div>
                </div>
            ) : (
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
                                <div className={styles["body__profile__info"]}>
                                    <span className={styles["body__profile__info__title"]}>Telegram ID</span>
                                    <span className={styles["body__profile__info__text"]}>{userDataFullAnother?.telegram}</span>
                                </div>
                                <div className={styles["body__profile__info"]}>
                                    <span className={styles["body__profile__info__title"]}>Номер телефона</span>
                                    <span className={styles["body__profile__info__text"]}>{userDataFullAnother?.phone}</span>
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
                            {currentProfile ? (
                                <div className={styles["body__btn"]}>
                                    <Button onClick={() => router.push("/data")} type="default">
                                        Изменить данные
                                    </Button>
                                    <Button onClick={logoutUser} type="white">
                                        Выйти
                                    </Button>
                                </div>
                            ) : null}
                            {/* Сообщение? */}
                        </div>
                        <div className={styles["body__info"]}>
                            <div className={styles["body__info__title"]}>Записи на мероприятия</div>
                            <div className={styles["body__info__list"]}>
                                {userDataFullAnother?.meetings?.map((value, key) => <MeetingItem key={key} value={value} myKey={key} />)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Profile;
