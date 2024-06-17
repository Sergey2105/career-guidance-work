import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { selectUserFull } from "@/assets/shared/components/store/slice/authSlice";
import CreateMeetingHeader from "../../../Meeting/CreateMeeting/components/CreateMeetingHeader";
import CreateMeetingItem from "../../../Meeting/CreateMeeting/components/CreateMeetingItem";
import { useDispatch } from "@/assets/shared/components/store/hooks";
import ModalCreateTimetable from "@/assets/shared/components/modal/ModalCreateTimetable";
import ModalCreateMeeting from "@/assets/shared/components/modal/ModalCreateMeeting";
import Button from "@/assets/shared/components/buttons/Button";
import { getEvent, selectLoadingMeeting } from "@/assets/shared/components/store/slice/eventSlice";
import Loader from "@/assets/shared/components/Loader";

const QrMeeting = (props) => {
    const [modalCreateTimetable, setModalCreateTimetable] = useState<boolean>(false);
    const [modalCreateMeeting, setModalCreateMeeting] = useState<boolean>(false);
    const userDataFull = useSelector(selectUserFull);
    const loadingEvent = useSelector(selectLoadingMeeting);

    const dispatch = useDispatch();

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
    }, []);

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
            {loadingEvent ? <Loader /> : null}
            {modalCreateTimetable ? <ModalCreateTimetable switchModalCreateTimetable={switchModalCreateTimetable} switchModalCreateMeeting={switchModalCreateMeeting} /> : null}
            {modalCreateMeeting ? <ModalCreateMeeting switchModalCreateMeeting={switchModalCreateMeeting} switchModalCreateTimetable={switchModalCreateTimetable} /> : null}
            <div className={styles["wrapper"]}>
                {userDataFull?.my_meeting?.length !== 0 ? (
                    <div className={styles["list__meeting"]}>
                        <CreateMeetingHeader>{userDataFull?.my_meeting?.map((value, key) => <CreateMeetingItem key={key} value={value} myKey={key} />)}</CreateMeetingHeader>
                    </div>
                ) : (
                    <>
                        <div className={styles["meeting"]}>
                            <div className={styles["meeting__text"]}>
                                <span>У вас нет созданных событий</span>
                            </div>
                            <div className={styles["meeting__btn"]}>
                                <Button type="default" onClick={switchModalCreateTimetable}>
                                    Создать
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default QrMeeting;
