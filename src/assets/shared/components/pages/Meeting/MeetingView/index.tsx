import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Room from "/public/img/room.jpg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../store/hooks";
import { getEvent, joinEvent, selectEventProps } from "../../../store/slice/eventSlice";
import Button from "../../../buttons/Button";
import Tag from "../../../Tag";

const MeetingView = (props) => {
    const [id, setID] = useState("");
    const dispatch = useDispatch();
    const route = useRouter();
    const event = useSelector(selectEventProps);
    console.log(event);

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
    }, []);

    const addEc = () => {
        // const id = location.pathname.split("/").filter((el) => el)[1];
        // dispatch(joinEvent(String(id)));
    };

    return (
        <>
            <div className={styles["wrapper"]}>
                <div className={styles["header"]}>
                    <div className={styles["img"]}>
                        <Image className={styles["img__img"]} src={Room} alt="class" />
                    </div>
                    <div className={styles["header__main"]}>
                        <div className={styles["header__main__title"]}>{event.title}</div>
                        <div className={styles["header__main__name"]}>
                            <div className={styles["header__main__info__time"]}>Время проведения</div>
                            <div className={styles["header__main__info__place"]}>Место проведения</div>
                            <div className={styles["header__main__info__date"]}>Дата проведения</div>
                            <div className={styles["header__main__info__date"]}>Колличество мест</div>
                        </div>
                        <div className={styles["header__main__info"]}>
                            <div className={styles["header__main__info__time"]}>
                                {event?.timetable.start_time} – {event?.timetable.end_time}
                            </div>
                            <div className={styles["header__main__info__place"]}>{event?.timetable.place.office}</div>
                            <div className={styles["header__main__info__date"]}>{event?.timetable.event_date}</div>
                            <div className={styles["header__main__info__date"]}>{event?.timetable.place.max_participant}</div>
                        </div>
                    </div>
                </div>
                <div className={styles["main"]}>
                    <div className={styles["main__tag"]}>{event?.tags?.map((value, key) => <Tag key={key} value={value} myKey={key} />)}</div>
                    <div className={styles["main__btn"]}>
                        <Button label={"Записаться"} onClick={addEc()}></Button>
                    </div>
                </div>
                <div className={styles["info"]}>
                    <div className={styles["info__title"]}>Информация о мероприятии</div>
                    <div className={styles["info__text"]}>{event?.body}</div>
                </div>
            </div>
        </>
    );
};
export default MeetingView;
