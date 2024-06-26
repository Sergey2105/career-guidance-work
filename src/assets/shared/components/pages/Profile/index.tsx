import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { getAnotherFull, logout, selectLoadingUser, selectLoadingUserFullAnother, selectUser, selectUserFull, selectUserFullAnother } from "../../store/slice/authSlice";
import Image from "next/image";
import Nophoto from "/public/img/nophoto.jpeg";
import Button from "../../buttons/Button";
import Tag from "../../Tag";
import MeetingItem from "../Meeting/MeetingItem";
import Loader from "../../Loader";
import Link from "next/link";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import QrCode from "../../QrCode";

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const userData = useSelector(selectUser);
    const Mobile = useMediaQuery(375);
    const Tablet = useMediaQuery(769);
    const Laptop = useMediaQuery(1024);
    const Desktop = useMediaQuery(1280);

    const [currentProfile, setCurrentProfile] = useState<boolean>(true);
    const [isProfile, setIsProfile] = useState<boolean>(true);
    const [isMeeting, setIsMeeting] = useState<boolean>(false);
    const userDataFullAnother = useSelector(selectUserFullAnother);
    const loading = useSelector(selectLoadingUser);
    const loadingAnother = useSelector(selectLoadingUserFullAnother);

    const changeProfile = () => {
        setIsProfile(true);
        setIsMeeting(false);
    };
    const changeMeeting = () => {
        setIsProfile(false);
        setIsMeeting(true);
    };

    useEffect(() => {
        if (Tablet) {
            setIsProfile(true);
            setIsMeeting(true);
        } else {
            setIsProfile(true);
            setIsMeeting(false);
        }
    }, [Desktop, Laptop, Tablet, Mobile]);

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
            window.location.reload();
        });
    };

    return (
        <>
            {loading || loadingAnother ? <Loader /> : null}
            {userDataFullAnother?.detail ? (
                <div className={styles["message"]}>
                    <span className={styles["message__text"]}>{userDataFullAnother?.detail}</span>
                    <div className={styles["message__btn"]}>
                        <Button onClick={() => router.push("/")} type="default">
                            Вернуться на главную
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={styles["wrapper"]}>
                    {!Tablet ? (
                        <div className={styles["tabs"]}>
                            <button onClick={changeProfile} className={clsx(styles["tabs__tab"], isProfile ? styles[`tabs__tab__active`] : "")}>
                                Профиль
                            </button>
                            <button onClick={changeMeeting} className={clsx(styles["tabs__tab"], isMeeting ? styles[`tabs__tab__active`] : "")}>
                                Мероприятия
                            </button>
                        </div>
                    ) : null}
                    <div className={styles["body"]}>
                        {isProfile ? (
                            <div className={styles["body__profile"]}>
                                <div>
                                    <div className={styles["body__profile__img"]}>
                                        {userDataFullAnother?.profile_pic ? (
                                            <img className={styles["body__profile__img__img"]} src={userDataFullAnother?.profile_pic} alt="Uploaded" height="200px" />
                                        ) : (
                                            <Image className={styles["body__profile__img__img"]} src={Nophoto} alt={"room"} objectFit="contain" />
                                        )}
                                    </div>
                                    <div className={styles["body__profile__info"]}>
                                        <span className={styles["body__profile__info__title"]}>Имя</span>
                                        <span className={styles["body__profile__info__text"]}>
                                            {userDataFullAnother?.first_name !== null ? userDataFullAnother?.first_name : "Данные отсутвуют"}
                                        </span>
                                    </div>
                                    <div className={styles["body__profile__info"]}>
                                        <span className={styles["body__profile__info__title"]}>Фамилия</span>
                                        <span className={styles["body__profile__info__text"]}>
                                            {userDataFullAnother?.last_name !== null ? userDataFullAnother?.last_name : "Данные отсутвуют"}
                                        </span>
                                    </div>
                                    <div className={styles["body__profile__info"]}>
                                        <span className={styles["body__profile__info__title"]}>Email</span>
                                        <span className={styles["body__profile__info__text"]}>
                                            {userDataFullAnother?.email !== null ? userDataFullAnother?.email : "Данные отсутвуют"}
                                        </span>
                                    </div>
                                    <div className={styles["body__profile__info"]}>
                                        <span className={styles["body__profile__info__title"]}>Дата рождния</span>
                                        <span className={styles["body__profile__info__text"]}>
                                            {userDataFullAnother?.birthday !== null ? userDataFullAnother?.birthday : "Данные отсутвуют"}
                                        </span>
                                    </div>
                                    <div className={styles["body__profile__info"]}>
                                        <span className={styles["body__profile__info__title"]}>Номер телефона</span>
                                        <span className={styles["body__profile__info__text"]}>
                                            {userDataFullAnother?.phone
                                                ? `+7 ${userDataFullAnother?.phone?.slice(1, 4)} ${userDataFullAnother?.phone?.slice(4, 7)} ${userDataFullAnother?.phone?.slice(
                                                      7,
                                                      9,
                                                  )} ${userDataFullAnother?.phone?.slice(9)}`
                                                : "Данные отсутвуют"}
                                        </span>
                                    </div>
                                    <div className={styles["body__profile__info"]}>
                                        <span className={styles["body__profile__info__title"]}>Telegram ID</span>
                                        <span className={styles["body__profile__info__text"]}>
                                            {userDataFullAnother?.telegram ? userDataFullAnother?.telegram : "Данные отсутвуют"}
                                        </span>
                                    </div>
                                    {userDataFullAnother?.tags?.length !== 0 ? (
                                        <div className={styles["body__profile__info"]}>
                                            <span className={styles["body__profile__info__title"]}>Теги</span>
                                            <div className={styles["body__profile__info__text"]}>
                                                {userDataFullAnother?.tags?.map((value, key) => <Tag key={key} value={value} myKey={key} />)}
                                            </div>
                                        </div>
                                    ) : null}
                                    {currentProfile ? (
                                        <div className={styles["body__qr"]}>
                                            <span className={styles["body__qr__text"]}>Ваш QR-код для прохода на мероприятия</span>
                                            <div className={styles["body__profile__info__text"]}>
                                                <QrCode id={String(userDataFullAnother?.id)} />
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
                            </div>
                        ) : null}
                        {isMeeting ? (
                            <div className={styles["body__info"]}>
                                <div className={styles["body__info__title"]}>Записи на мероприятия</div>
                                {userDataFullAnother?.meetings?.length !== 0 ? (
                                    <div className={styles["body__info__list"]}>
                                        {userDataFullAnother?.meetings?.map((value, key) => <MeetingItem key={key} value={value} myKey={key} />)}
                                    </div>
                                ) : (
                                    <div className={styles["body__info__message"]}>
                                        <span>
                                            На данный момент нет у вас нет записей на мероприятия. Пожалуйста, перейдите на <Link href="/meeting">страницу с мероприятиями</Link> и
                                            выберите те, которые вас заинтересуют, чтобы зарегистрироваться.
                                        </span>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
};
export default Profile;
