import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import CreateMeetingViewHeader from "../../../Meeting/CreateMeetingView/components/CreateMeetingViewHeader";
import CreateMeetingViewItem from "../../../Meeting/CreateMeetingView/components/CreateMeetingViewItem";
import { useDispatch } from "@/assets/shared/components/store/hooks";
import { getEvent, getGuest, selectGuest } from "@/assets/shared/components/store/slice/eventSlice";

const QrGuest = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
        dispatch(getGuest(String(id)));
    }, []);

    const guest = useSelector(selectGuest);

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["body__guest"]}>
                <CreateMeetingViewHeader>{guest?.profile_list?.map((value, key) => <CreateMeetingViewItem key={key} value={value} myKey={key} />)}</CreateMeetingViewHeader>
            </div>
        </div>
    );
};
export default QrGuest;
