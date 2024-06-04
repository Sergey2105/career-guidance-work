import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createTimetable, getPlaces, getTimetable, selectErrorsTimetable, selectPlace, selectTimetable } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import { InputDropdownPlaces } from "../../inputs/InputDropdown/Places";
import Message from "../../Message";
import LongArrow from "/public/icons/longArrow.svg";

const ModalCreateTimetable = (props) => {
    const { switchModalCreateMeeting, switchModalCreateTimetable } = props;
    const dispatch = useDispatch();
    const [places, setPlaces] = useState<any>([]);
    const [inputDate, setInputDate] = useState<string>("");
    const [inputTimeStart, setInputTimeStart] = useState<string>("");
    const [inputTimeEnd, setInputTimeEnd] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsTimetable);

    useEffect(() => {
        dispatch(getPlaces());
        dispatch(getTimetable());
    }, []);

    const place = useSelector(selectPlace);
    const timetable = useSelector(selectTimetable);

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

    const changeCreateTimetable = () => {
        dispatch(createTimetable({ event_date: inputDate, start_time: inputTimeStart, end_time: inputTimeEnd, place: String(places.id) })).then((res) => {
            if (res.type.includes("fulfilled")) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    switchModalCreateTimetable();
                    switchModalCreateMeeting();
                }, 2000);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            }
        });
    };

    const skip = () => {
        switchModalCreateTimetable();
        switchModalCreateMeeting();
    };

    const disabled = places.length === 0 || inputDate.length === 0 || inputTimeStart.length === 0 || inputTimeEnd.length === 0;

    return (
        <>
            {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.detail != null ? messageError?.detail : "Запись успешно создана!"}</Message>
                </div>
            ) : null}
            <ModalBase
                title={"Создать запись"}
                onCloseModal={switchModalCreateTimetable}
                size="large"
                footer={
                    <>
                        <Button type="white" onClick={switchModalCreateTimetable}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={changeCreateTimetable} disabled={disabled}>
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
                            value={inputDate}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputTime type={"time"} placeholder={"ЧЧ:ММ"} label={"Время начала мероприятия"} onChange={changeTimeStart} changeClear={changeTimeStartClear} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputTime type={"time"} placeholder={"ЧЧ:ММ"} label={"Время окончания мероприятия"} onChange={changeTimeEnd} changeClear={changeTimeEndClear} />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDropdownPlaces value={places} onChange={setPlaces} options={place} label={"Место проведения мероприятия"} />
                    </div>
                    {timetable.length !== 0 ? (
                        <button className={styles["body__skip"]} onClick={skip}>
                            <span className={styles["body__skip__text"]}>Перейти к созданию мероприятия</span>
                            <div className={styles["body__skip__icon"]}>
                                <LongArrow />
                            </div>
                        </button>
                    ) : null}
                </div>
            </ModalBase>
        </>
    );
};
export default ModalCreateTimetable;
