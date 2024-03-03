import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import EventItem from "../MeetingsItem";
import Pagination from "../../../Pagination";
import { fetchEvents, selectEvents } from "../../../store/slice/eventsSlice";
import { useDispatch, useSelector } from "../../../store/hooks";
import { useRouter } from "next/router";

const MeetingList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputSearch, setInputSearch] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchEvents({ page: currentPage, search: inputSearch }));
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        dispatch(fetchEvents({ page: 1, search: inputSearch })).then(() => {
            router.push("");
        });
    }, [inputSearch]);

    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    console.log(events);

    return (
        <div className={styles["list"]}>
            <div className={styles["list__wrapper"]}>
                <div className={styles["list__list"]}>{events?.results?.map((value, key) => <EventItem key={key} value={value} myKey={key} />)}</div>
                <div className={styles["pagination"]}>
                    {events?.results?.length != 0 && events?.meta?.page_count > 1 ? (
                        <Pagination howManyPages={events?.meta?.page_count} onChange={setCurrentPage} inputSearch={inputSearch} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};
export default MeetingList;
