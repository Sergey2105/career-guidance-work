import React, { useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import InputText from "../../inputs/inputText";
import Button from "../../buttons/Button";
import ModalCreateTimetable from "../../modal/ModalCreateTimetable";
import ModalCreateMeeting from "../../modal/ModalCreateMeeting";

const CreateMeeting = () => {
    const [modalCreateTimetable, setModalCreateTimetable] = useState<boolean>(false);
    const [modalCreateMeeting, setModalCreateMeeting] = useState<boolean>(false);

    const router = useRouter();
    const dispatch = useDispatch();

    const switchModalCreateTimetable = () => {
        if (modalCreateTimetable) {
            setModalCreateTimetable(false);
            document.body.style.overflow = "visible";
        } else {
            setModalCreateTimetable(true);
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <>
            {modalCreateTimetable ? <ModalCreateTimetable switchModalCreateTimetable={switchModalCreateTimetable} /> : null}
            {modalCreateMeeting ? <ModalCreateMeeting /> : null}
            <div className={styles["list__wrapper"]}>
                <div className={styles["list"]}>
                    <div className={styles["list__title"]}>Мои мероприятия</div>
                    <div className={styles["list__header"]}>
                        <div className={styles["list__search"]}>
                            <InputText />
                        </div>
                        <Button type="default" onClick={switchModalCreateTimetable}>
                            Создать
                        </Button>
                    </div>
                    {/* <div className={styles["list__list"]}>{events?.results?.map((value, key) => <MeetingsItem key={key} value={value} myKey={key} />)}</div>
                {events?.meta?.page_count > 1 && events.results.length !== 0 ? (
                    <div className={styles["pagination"]}>
                    <Pagination howManyPages={events?.meta?.page_count} onChange={setCurrentPage} inputSearch={inputSearch} />
                    </div>
                ) : null} */}
                </div>
            </div>
        </>
    );
};
export default CreateMeeting;
