import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../store/hooks";
import { deleteEvents, editEvents, getEvent, getGuest, selectEventProps, selectGuest } from "../../../store/slice/eventSlice";
import { selectUser, selectUserFull } from "../../../store/slice/authSlice";
import InputText from "../../../inputs/inputText";
import InputAria from "../../../inputs/inputAria";
import Button from "../../../buttons/Button";
import CreateMeetingViewItem from "./components/CreateMeetingViewItem";
import CreateMeetingViewHeader from "./components/CreateMeetingViewHeader";

const CreateMeetingView = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const event = useSelector(selectEventProps);
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);
    const [inputTitle, setInputTitle] = useState<string>(event.title);
    const [inputBody, setInputBody] = useState<string>(event.body);

    console.log(event);

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
        dispatch(getGuest(String(id)));
    }, []);

    const guest = useSelector(selectGuest);
    console.log(guest);

    useEffect(() => {
        if (event) {
            // dispatch(getEvent(String(event.id)));
            setInputTitle(event.title);
            setInputBody(event.body);
        }
    }, [event]);

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    const changeBody = (e) => {
        setInputBody(e.target.value);
    };

    const changeData = () => {
        dispatch(editEvents({ id: event.id, author: userDataFull.id, title: inputTitle, body: inputBody }))
            .then(() => {
                dispatch(getEvent(String(event.id)));
            })
            .catch(() => {
                dispatch(getEvent(String(event.id)));
            });
    };

    const deleteMeeting = () => {
        dispatch(deleteEvents({ id: event.id })).then(() => {
            router.push("/mymeeting");
        });
    };

    return (
        <>
            <div className={styles["wrapper"]}>
                <div className={styles["body"]}>
                    <div className={styles["body__title"]}>
                        <span>{event.title}</span>
                    </div>
                    <div className={styles["body__input"]}>
                        <InputText
                            placeholder={"Введите название мероприятия"}
                            label={"Название мероприятия"}
                            onChange={changeTitle}
                            changeClear={changeTitleClear}
                            value={inputTitle}
                        />
                    </div>
                    <div className={styles["body__input"]}>
                        <InputAria placeholder={"Введите информацию о мероприятии"} label={"Информация о мероприятии"} type={"text"} onChange={changeBody} value={inputBody} />
                    </div>
                    <div className={styles["btn"]}>
                        <Button type="default" onClick={changeData}>
                            Изменить
                        </Button>
                        <Button type="delete" onClick={deleteMeeting}>
                            Удалить
                        </Button>
                    </div>

                    <div className={styles["body__guest"]}>
                        <CreateMeetingViewHeader>{guest?.profile_list?.map((value, key) => <CreateMeetingViewItem key={key} value={value} myKey={key} />)}</CreateMeetingViewHeader>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CreateMeetingView;
