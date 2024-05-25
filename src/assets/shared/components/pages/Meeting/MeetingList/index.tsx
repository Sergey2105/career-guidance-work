import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import MeetingsItem from "../MeetingItem";
import Pagination from "../../../Pagination";
import { useDispatch, useSelector } from "../../../store/hooks";
import Loader from "../../../Loader";
// import useDebounce from "@/hooks/useDebounce";
import InputSearch from "../../../inputs/inputSeach";
import { fetchEvents, selectEvents, selectEventsLoading } from "../../../store/slice/eventsSlice";
import { useRouter } from "next/router";
import { useDebounce } from "@/hooks/useDebounce";

const MeetingList = () => {
    const router = useRouter();
    // const initialPage = router.query.page ? Number(router.query.page) : 1;

    // console.log(initialPage);

    const [currentPage, setCurrentPage] = useState<number | undefined>(undefined);
    const [inputSearch, setInputSearch] = useState<string>("");
    const isFirstRender = useRef(true);

    const changeSearchHandler = useDebounce((value) => {
        setInputSearch(value || "");
    }, 500);
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    const loading = useSelector(selectEventsLoading);
    console.log(inputSearch);

    const changeSearch = (e) => {
        changeSearchHandler(e.target.value);
    };

    const changeLoginSearch = (e) => {
        changeSearchHandler("");
    };

    // useEffect(() => {
    //     if (router.isReady && router.query.page) {
    //         const pageParam = Number(router.query.page);
    //         if (isFirstRender.current) {
    //             setCurrentPage(pageParam);
    //             isFirstRender.current = false;
    //         }
    //     }
    // }, [router.isReady, router.query.page]);
    useEffect(() => {
        if (router.isReady && router.query.page) {
            const pageParam = Number(router.query.page);
            setCurrentPage(pageParam);
        }
    }, [router.isReady, router.query.page]);

    useEffect(() => {
        if (currentPage !== undefined && !isFirstRender.current) {
            dispatch(fetchEvents({ page: currentPage, search: inputSearch }));
        } else {
            isFirstRender.current = false;
        }
    }, [currentPage]);

    useEffect(() => {
        if (!isFirstRender.current) {
            // Проверка, чтобы не срабатывал при первом рендере
            if (inputSearch === "") {
                setCurrentPage(1);
                dispatch(fetchEvents({ page: 1, search: inputSearch }));
            } else if (inputSearch !== "") {
                setCurrentPage(1);
            }
        } else {
            isFirstRender.current = false; // Устанавливаем флаг после первого рендера
        }
    }, [inputSearch]);

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
                    {events?.results?.length !== 0 || inputSearch.length !== 0 ? (
                        <>
                            {events?.results?.length !== 0 ? (
                                <div className={styles["list__list"]}>{events?.results?.map((value, key) => <MeetingsItem key={key} value={value} myKey={key} />)}</div>
                            ) : (
                                <>
                                    {events?.results?.length === 0 || inputSearch.length !== 0 ? (
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
                            <Pagination howManyPages={events?.meta?.page_count} onChange={setCurrentPage} inputSearch={inputSearch} currentButton={currentPage} />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default MeetingList;
