import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import MeetingsItem from "../MeetingItem";
import Pagination from "../../../Pagination";
import { useDispatch, useSelector } from "../../../store/hooks";
import { useRouter } from "next/router";
import Loader from "../../../Loader";
import InputText from "../../../inputs/inputText";
import useDebounce from "@/hooks/useDebounce";
import { useGetMetingQuery } from "../../../store/services/getMeeting";

const MeetingList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [inputSearch, setInputSearch] = useState<string>("");
    const debouncedSearchTerm = useDebounce(inputSearch, 500);

    const router = useRouter();

    const changeSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const changeLoginSearch = (e) => {
        setInputSearch("");
    };

    // useEffect(() => {
    //     dispatch(fetchEvents({ page: currentPage, search: inputSearch }));
    // }, [currentPage]);

    // useEffect(() => {
    //     setCurrentPage(1);
    //     dispatch(fetchEvents({ page: 1, search: inputSearch })).then(() => {
    //         // router.push("");
    //     });
    // }, [inputSearch]);

    const dispatch = useDispatch();
    const { isLoading, isFetching, data, error } = useGetMetingQuery({ page: currentPage, search: inputSearch });
    console.log(data);

    return (
        <>
            {isLoading ? <Loader /> : null}
            <div className={styles["list__wrapper"]}>
                <div className={styles["list"]}>
                    <div className={styles["list__title"]}>Все мероприятия</div>
                    <div className={styles["list__header"]}>
                        <div className={styles["list__search"]}>
                            <InputText value={inputSearch} onChange={changeSearch} changeClear={changeLoginSearch} />
                        </div>
                        <div className={styles["list__data"]}>fsfdsfsd</div>
                    </div>
                    <div className={styles["list__list"]}>{data?.results?.map((value, key) => <MeetingsItem key={key} value={value} myKey={key} />)}</div>
                    {data && data?.meta?.page_count > 1 && data?.results.length !== 0 ? (
                        <div className={styles["pagination"]}>
                            <Pagination howManyPages={data?.meta?.page_count} onChange={setCurrentPage} inputSearch={debouncedSearchTerm} />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default MeetingList;
