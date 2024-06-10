import React, { useState } from "react";
import styles from "./index.module.scss";
import { useSelector } from "../../../store/hooks";
import Button from "../../../buttons/Button";
import ModalCreateTimetable from "../../../modal/ModalCreateTimetable";
import ModalCreateMeeting from "../../../modal/ModalCreateMeeting";
import { selectLoadingUser, selectUserFull } from "../../../store/slice/authSlice";
import CreateMeetingHeader from "./components/CreateMeetingHeader";
import CreateMeetingItem from "./components/CreateMeetingItem";
import InputSearch from "../../../inputs/inputSeach";
import Loader from "../../../Loader";

const CreateMeeting = () => {
    const [modalCreateTimetable, setModalCreateTimetable] = useState<boolean>(false);
    const [modalCreateMeeting, setModalCreateMeeting] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>("");
    const userDataFull = useSelector(selectUserFull);
    const loadingEvent = useSelector(selectLoadingUser);
    const loadingUser = useSelector(selectLoadingUser);

    const switchModalCreateTimetable = () => {
        if (modalCreateTimetable) {
            setModalCreateTimetable(false);
            document.body.style.overflow = "visible";
        } else {
            setModalCreateTimetable(true);
            document.body.style.overflow = "hidden";
        }
    };

    const switchModalCreateMeeting = () => {
        if (modalCreateMeeting) {
            setModalCreateMeeting(false);
            document.body.style.overflow = "visible";
        } else {
            setModalCreateMeeting(true);
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <>
            {loadingEvent || loadingUser ? <Loader /> : null}
            {modalCreateTimetable ? <ModalCreateTimetable switchModalCreateTimetable={switchModalCreateTimetable} switchModalCreateMeeting={switchModalCreateMeeting} /> : null}
            {modalCreateMeeting ? <ModalCreateMeeting switchModalCreateMeeting={switchModalCreateMeeting} switchModalCreateTimetable={switchModalCreateTimetable} /> : null}
            <div className={styles["list__wrapper"]}>
                <div className={styles["list"]}>
                    <div className={styles["list__header"]}>
                        <div className={styles["list__title"]}>Мои мероприятия</div>
                        {/* <div className={styles["list__search"]}>
                            <InputSearch />
                        </div> */}
                        <Button type="default" onClick={switchModalCreateTimetable}>
                            Создать
                        </Button>
                    </div>
                    {userDataFull?.my_meeting?.length !== 0 || inputSearch.length !== 0 ? (
                        <>
                            {userDataFull?.my_meeting?.length !== 0 ? (
                                <div className={styles["list__meeting"]}>
                                    <CreateMeetingHeader>
                                        {userDataFull?.my_meeting?.map((value, key) => <CreateMeetingItem key={key} value={value} myKey={key} />)}
                                    </CreateMeetingHeader>
                                </div>
                            ) : (
                                <>
                                    {userDataFull?.my_meeting?.length === 0 || inputSearch.length !== 0 ? (
                                        <div className={styles["list__message"]}>
                                            <span>Мероприятия отсутствуют, измените данные для поиска</span>
                                        </div>
                                    ) : null}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={styles["list__message"]}>
                                <span>У вас нет созданных событий</span>
                                <div className={styles["list__message__btn"]}>
                                    <Button type="default" onClick={switchModalCreateTimetable}>
                                        Создать
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
export default CreateMeeting;
