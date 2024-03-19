import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import MeetingsItem from "../MeetingsItem";
import Pagination from "../../../Pagination";
import { fetchEvents, selectEvents, selectEventsLoading } from "../../../store/slice/eventsSlice";
import { useDispatch, useSelector } from "../../../store/hooks";
import { useRouter } from "next/router";
import Loader from "../../../Loader";
import InputText from "../../../inputs/inputText";

const MeetingList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputSearch, setInputSearch] = useState<string>("");
    const router = useRouter();

    console.log(currentPage);

    const changeSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const changeLoginSearch = (e) => {
        setInputSearch("");
    };

    useEffect(() => {
        dispatch(fetchEvents({ page: currentPage, search: inputSearch }));
    }, [currentPage]);

    // useEffect(() => {
    //     setCurrentPage(1);
    //     dispatch(fetchEvents({ page: 1, search: inputSearch })).then(() => {
    //         // router.push("");
    //     });
    // }, [inputSearch]);

    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    const loading = useSelector(selectEventsLoading);

    console.log(events);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles["list__wrapper"]}>
                    <div className={styles["list"]}>
                        <div className={styles["list__title"]}>Все мероприятия</div>
                        <div className={styles["list__header"]}>
                            <div className={styles["list__search"]}>
                                <InputText value={inputSearch} onChange={changeSearch} changeClear={changeLoginSearch} />
                            </div>
                            <div className={styles["list__data"]}>fsfdsfsd</div>
                        </div>
                        <div className={styles["list__list"]}>{events?.results?.map((value, key) => <MeetingsItem key={key} value={value} myKey={key} />)}</div>
                        {events?.meta?.page_count > 1 && events.results.length !== 0 ? (
                            <div className={styles["pagination"]}>
                                <Pagination howManyPages={events?.meta?.page_count} onChange={setCurrentPage} inputSearch={inputSearch} />
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
};
export default MeetingList;
