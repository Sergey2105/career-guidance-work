import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import MeetingsItem from "../MeetingItem";
import Pagination from "../../../Pagination";
import { useDispatch, useSelector } from "../../../store/hooks";
import Loader from "../../../Loader";
import useDebounce from "@/hooks/useDebounce";
import { useGetMetingQuery } from "../../../store/services/getMeeting";
import InputSearch from "../../../inputs/inputSeach";
import { fetchEvents, selectEvents } from "../../../store/slice/eventsSlice";

const MeetingList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputSearch, setInputSearch] = useState<string>("");
    const debouncedSearchTerm = useDebounce(inputSearch, 500);
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);

    const changeSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const changeLoginSearch = (e) => {
        setInputSearch("");
    };

    useEffect(() => {
        dispatch(fetchEvents({ page: currentPage, search: inputSearch }));
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        dispatch(fetchEvents({ page: 1, search: inputSearch })).then(() => {});
    }, [inputSearch]);

    const { isLoading, isFetching, data, error } = useGetMetingQuery({ page: currentPage, search: debouncedSearchTerm });

    return (
        <>
            {isLoading ? <Loader /> : null}
            <div className={styles["list__wrapper"]}>
                <div className={styles["list"]}>
                    <div className={styles["list__title"]}>Все мероприятия</div>
                    <div className={styles["list__header"]}>
                        <div className={styles["list__search"]}>
                            <InputSearch value={inputSearch} onChange={changeSearch} changeClear={changeLoginSearch} />
                        </div>
                    </div>
                    {events && events?.meta?.total_count > 0 ? (
                        <div className={styles["list__list"]}>{events?.results?.map((value, key) => <MeetingsItem key={key} value={value} myKey={key} />)}</div>
                    ) : (
                        <div className={styles["list__list__message"]}>Мероприятия отсутствуют</div>
                    )}
                    {events && events?.meta?.page_count > 1 && events?.results.length !== 0 ? (
                        <div className={styles["pagination"]}>
                            <Pagination howManyPages={events?.meta?.page_count} onChange={setCurrentPage} inputSearch={debouncedSearchTerm} />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default MeetingList;
