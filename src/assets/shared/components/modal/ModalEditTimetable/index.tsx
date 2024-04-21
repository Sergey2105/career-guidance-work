import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputText from "../../inputs/inputText";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createTimetable, editTimetable, getPlaces, selectErrorsTimetable, selectPlace } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import { InputDropdownPlaces } from "../../inputs/InputDropdown/Places";
import Message from "../../Message";

const ModalEditTimetable = (props) => {
    const { switchModalEdit, event } = props;
    const dispatch = useDispatch();
    const [places, setPlaces] = useState<any>([]);
    const [inputDate, setInputDate] = useState<string>("");
    const [inputTimeStart, setInputTimeStart] = useState<string>("");
    const [inputTimeEnd, setInputTimeEnd] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsTimetable);
    console.log(messageError);

    useEffect(() => {
        dispatch(getPlaces());
    }, []);

    const place = useSelector(selectPlace);

    useEffect(() => {
        if (event) {
            setPlaces(event?.timetable?.place);
            setInputDate(event?.timetable?.event_date);
            setInputTimeStart(event?.timetable?.start_time);
            setInputTimeEnd(event?.timetable?.end_time);
        }
    }, [event]);

    console.log(inputTimeStart);

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

    const changeCreateTimetable = () => {
        dispatch(editTimetable({ id: event.id, event_date: inputDate, start_time: inputTimeStart, end_time: inputTimeEnd, place: String(places.id) })).then((res) => {
            if (res.type.includes("fulfilled")) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    switchModalEdit();
                }, 2000);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            }
        });
    };

    const disabled = places.length === 0 || inputDate.length === 0 || inputTimeStart.length === 0 || inputTimeEnd.length === 0;

    // console.log(success);
    console.log(messageError);
    //success не очищается и нужно 3 условия

    return (
        <>
            {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.detail != null ? messageError?.detail : "Запись успешно изменена!"}</Message>
                </div>
            ) : null}
            <ModalBase
                title={"Изменить запись"}
                onCloseModal={switchModalEdit}
                size="large"
                footer={
                    <>
                        <Button type="white" onClick={switchModalEdit}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={changeCreateTimetable} disabled={disabled}>
                            Изменить
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
                        <InputTime
                            type={"time"}
                            placeholder={"ЧЧ:ММ"}
                            label={"Время начала мероприятия"}
                            onChange={changeTimeStart}
                            changeClear={changeTimeStartClear}
                            value={inputTimeStart}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputTime
                            type={"time"}
                            placeholder={"ЧЧ:ММ"}
                            label={"Время окончания мероприятия"}
                            onChange={changeTimeEnd}
                            changeClear={changeTimeEndClear}
                            value={inputTimeEnd}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputDropdownPlaces value={places} onChange={setPlaces} options={place} label={"Место проведения мероприятия"} />
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalEditTimetable;
