import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import CreateMeetingViewHeader from "../../../Meeting/CreateMeetingView/components/CreateMeetingViewHeader";
import CreateMeetingViewItem from "../../../Meeting/CreateMeetingView/components/CreateMeetingViewItem";
import { useDispatch } from "@/assets/shared/components/store/hooks";
import { getEvent, getGuest, selectGuest, selectLoadinggetGuest } from "@/assets/shared/components/store/slice/eventSlice";
import Loader from "@/assets/shared/components/Loader";

const QrGuest = (props) => {
    const dispatch = useDispatch();
    const loadingGuest = useSelector(selectLoadinggetGuest);
    const guest = useSelector(selectGuest);

    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        dispatch(getEvent(String(id)));
        dispatch(getGuest(String(id)));
    }, []);

    return (
        <>
            {loadingGuest ? <Loader /> : null}
            <div className={styles["wrapper"]}>
                <div className={styles["body__guest"]}>
                    <CreateMeetingViewHeader>{guest?.profile_list?.map((value, key) => <CreateMeetingViewItem key={key} value={value} myKey={key} />)}</CreateMeetingViewHeader>
                </div>
            </div>
        </>
    );
};
export default QrGuest;
