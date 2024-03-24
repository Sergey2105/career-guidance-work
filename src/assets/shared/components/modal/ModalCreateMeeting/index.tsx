import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputText from "../../inputs/inputText";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createTimetable, getPlaces, selectPlace } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import { InputDropdown } from "../../inputs/InputDropdown";

const ModalCreateMeeting = (props) => {
    const { switchModalCreateTimetable } = props;
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>("");
    const [seats, setSeats] = useState<number>();
    const [inputTimetable, setInputTimetable] = useState<string>("");
    const [inputTags, setInputTags] = useState<any>([]);

    useEffect(() => {
        dispatch(getPlaces());
    }, []);

    const placeTimetable = useSelector(selectPlace);

    console.log(places);

    const changeDate = (e) => {
        setInputDate(e);
    };

    const changeDateClear = () => {
        setInputDate("");
    };

    const changeTimeStart = (e) => {
        setInputTimeStart(e.target.value);
    };

    const changeTimeStartClear = () => {
        setInputTimeStart("");
    };

    const changeTimeEnd = (e) => {
        setInputTimeEnd(e.target.value);
    };

    const changeTimeEndClear = () => {
        setInputTimeEnd("");
    };
    const router = useRouter();

    // const changeCreateMeeting = () => {
    //     dispatch(createTimetable({ event_date: inputDate, start_time: inputTimeStart, end_time: inputTimeEnd, place: String(places.id) }));
    // };

    // const disable = places.length === 0 && inputDate.length === 0 && inputTimeStart.length === 0 && inputTimeEnd.length === 0;

    return (
        <>
            <ModalBase
                title={"Саздать запись"}
                onCloseModal={switchModalCreateTimetable}
                size="large"
                footer={
                    <>
                        <Button type="white" onClick={switchModalCreateTimetable}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={changeCreateTimetable} disable={disable}>
                            Создать
                        </Button>
                    </>
                }
            >
                <div className={styles["body"]}>
                    <div className={styles["body__input"]}>
                        <InputDate
                            placeholder={"Выберете дату"}
                            label={"Дата проведения мероприятия"}
                            type={"date"}
                            onChange={changeDate}
                            changeClear={changeDateClear}
                            defaultValue={inputDate}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputTime type={"time"} placeholder={"ЧЧ:ММ"} label={"Время начала мероприятия"} onChange={changeTimeStart} changeClear={changeTimeStartClear} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputTime type={"time"} placeholder={"ЧЧ:ММ"} label={"Время окончания мероприятия"} onChange={changeTimeEnd} changeClear={changeTimeEndClear} />
                    </div>
                    <div className={styles["body__input"]}>
                        {/* <InputDropdown label={"Место проведения мероприятия"} defaultValue={place} /> */}
                        <InputDropdown value={places} onChange={setPlaces} options={placeTimetable} label={"Место проведения мероприятия"} />
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalCreateMeeting;
