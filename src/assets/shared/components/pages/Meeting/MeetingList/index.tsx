import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import MeetingsItem from "../MeetingItem";
import Pagination from "../../../Pagination";
import { useDispatch, useSelector } from "../../../store/hooks";
import Loader from "../../../Loader";
import InputSearch from "../../../inputs/inputSeach";
import { fetchEvents, fetchRecommendedEvents, selectEvents, selectEventsLoading } from "../../../store/slice/eventsSlice";
import { useRouter } from "next/router";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchParams } from "next/navigation";
import { tr } from "date-fns/locale";
import clsx from "clsx";
import { selectUser } from "../../../store/slice/authSlice";

const MeetingList = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const initialPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

    const [currentPage, setCurrentPage] = useState<any>(initialPage);
    const [inputSearch, setInputSearch] = useState<string>("");
    const [recommended, setRecommended] = useState<boolean>(false);
    const userData = useSelector(selectUser);

    const switchRecommended = () => {
        if (recommended) {
            setRecommended(false);
            setInputSearch("");
        } else {
            setRecommended(true);
            setInputSearch("");
        }
    };

    const isFirstRender = useRef(true);

    const changeSearchHandler = useDebounce((value) => {
        setInputSearch(value || "");
        setCurrentPage(1);
    }, 1000);
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    const loading = useSelector(selectEventsLoading);

    const changeSearch = (e) => {
        changeSearchHandler(e.target.value);
    };

    const changeLoginSearch = (e) => {
        changeSearchHandler("");
    };

    useEffect(() => {
        if (router.isReady) {
            const pageParam = Number(router.query.page) || 1;
            setCurrentPage(pageParam);
            isFirstRender.current = false;
        }
    }, [router.isReady, router.query.page]);

    useEffect(() => {
        if (!isFirstRender.current) {
            if (recommended) {
                dispatch(fetchRecommendedEvents({ page: currentPage, search: inputSearch }));
                if (currentPage === 1) {
                    router.push("");
                }
            } else {
                dispatch(fetchEvents({ page: currentPage, search: inputSearch }));
                if (currentPage === 1) {
                    router.push("");
                }
            }
        }
    }, [currentPage, inputSearch, recommended]);

    return (
        <>
            {loading ? <Loader /> : null}
            <div className={styles["list__wrapper"]}>
                <div className={styles["list"]}>
                    <div className={clsx(styles["list__title"], recommended ? styles["list__title__recommended"] : "")}>
                        <span onClick={switchRecommended} className={recommended ? styles["list__title__inactive"] : styles["list__title__active"]}>
                            Все мероприятия
                        </span>
                        {userData.id_profile && userData?.id_profile !== "None" ? (
                            <>
                                <span className={styles["list__title__divider"]}>|</span>
                                <span onClick={switchRecommended} className={!recommended ? styles["list__title__inactive"] : styles["list__title__active"]}>
                                    Рекомендуемые
                                </span>
                            </>
                        ) : null}
                    </div>
                    <div className={styles["list__header"]}>
                        {!recommended ? (
                            <div className={styles["list__search"]}>
                                <InputSearch value={inputSearch} onChange={changeSearch} changeClear={changeLoginSearch} />
                            </div>
                        ) : null}
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
