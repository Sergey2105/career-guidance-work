import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputText from "../../inputs/inputText";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createTimetable, editTimetable, getEvent, getPlaces, selectErrorsTimetable, selectPlace } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import { InputDropdownPlaces } from "../../inputs/InputDropdown/Places";
import Message from "../../Message";
import { createVoting } from "../../store/slice/votings";

const ModalCreateVoting = (props) => {
    const { switchModalVoting, event } = props;
    const dispatch = useDispatch();
    const [inputTitle, setInputTitle] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsTimetable);

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    const changeCreateTimetable = () => {
        dispatch(createVoting({ id: event.id, name: inputTitle })).then((res) => {
            if (res.type.includes("fulfilled")) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    switchModalVoting();
                    dispatch(getEvent(String(event.id)));
                }, 2000);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            }
        });
    };

    const disabled = inputTitle.length === 0;

    //success не очищается и нужно 3 условия

    return (
        <>
            {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.detail != null ? messageError?.detail : "Опрос успешно создан!"}</Message>
                </div>
            ) : null}
            <ModalBase
                title={"Создать опрос"}
                onCloseModal={switchModalVoting}
                size="login"
                footer={
                    <>
                        <Button type="white" onClick={switchModalVoting}>
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
                        <InputText placeholder={"Введите название опроса"} label={"Название опроса"} onChange={changeTitle} changeClear={changeTitleClear} />
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalCreateVoting;
