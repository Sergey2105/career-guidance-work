import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import MeetingsItem from "../MeetingItem";
import Pagination from "../../../Pagination";
import { useDispatch, useSelector } from "../../../store/hooks";
import Loader from "../../../Loader";
import useDebounce from "@/hooks/useDebounce";
import { useGetMeetingsQuery } from "../../../store/services/getMeetings";
import InputSearch from "../../../inputs/inputSeach";
import { fetchEvents, selectEvents, selectEventsLoading } from "../../../store/slice/eventsSlice";
import { useRouter } from "next/router";

const MeetingList = () => {
    const router = useRouter();
    const pageParam = router.query.page;
    const initialPage = pageParam !== undefined ? Number(pageParam) : 1;

    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const [inputSearch, setInputSearch] = useState<string>("");
    const debouncedSearchTerm = useDebounce(inputSearch, 500);
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    const loading = useSelector(selectEventsLoading);

    const changeSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const changeLoginSearch = (e) => {
        setInputSearch("");
    };

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    useEffect(() => {
        dispatch(fetchEvents({ page: currentPage, search: debouncedSearchTerm }));
    }, [currentPage]);

    useEffect(() => {
        // if (debouncedSearchTerm) {
        // setCurrentPage(1);
        dispatch(fetchEvents({ page: 1, search: debouncedSearchTerm }));
        // }
    }, [debouncedSearchTerm]);

    console.log(currentPage);

    return (
        <>
            {loading ? <Loader /> : null}
            <div className={styles["list__wrapper"]}>
                <div className={styles["list"]}>
                    <div className={styles["list__title"]}>Все мероприятия</div>
                    <div className={styles["list__header"]}>
                        <div className={styles["list__search"]}>
                            <InputSearch value={inputSearch} onChange={changeSearch} changeClear={changeLoginSearch} />
                        </div>
                    </div>
                    {events?.results.length !== 0 || inputSearch.length !== 0 ? (
                        <>
                            {events?.results.length !== 0 ? (
                                <div className={styles["list__list"]}>{events?.results?.map((value, key) => <MeetingsItem key={key} value={value} myKey={key} />)}</div>
                            ) : (
                                <>
                                    {events?.results.length === 0 || inputSearch.length !== 0 ? (
                                        <div className={styles["list__list__message"]}>Мероприятия отсутствуют, измените данные для поиска</div>
                                    ) : null}
                                </>
                            )}
                        </>
                    ) : (
                        <div className={styles["list__list__message"]}>Мероприятия отсутствуют</div>
                    )}
                    {events && events?.meta?.page_count > 1 && events?.results.length !== 0 ? (
                        <div className={styles["pagination"]}>
                            <Pagination howManyPages={events?.meta?.page_count} onChange={setCurrentPage} inputSearch={debouncedSearchTerm} currentButton={currentPage} />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default MeetingList;
