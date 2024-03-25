/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { activated, getMe, getMeFull, selectUser, selectUserFull } from "../../store/slice/authSlice";
import { useEffect } from "react";
import { selectFullUser, userDate } from "../../store/slice/userSlice";
import Loader from "../../Loader";
import { getEvent } from "../../store/slice/eventSlice";

const MainLayout = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);

    console.log(userDataFull);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            dispatch(getMe());
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (Object.keys(userData).length !== 0 && token !== null && userData?.id_profile !== "None") {
            dispatch(getMeFull(String(userData.id_profile)));
        }
    }, [userData]);

    useEffect(() => {
        if (userData?.id_profile === "None") {
            dispatch(activated());
            router.push("/data");
        }
        if (userDataFull?.id && userDataFull?.birthday === null && userData?.id_profile !== "None") {
            router.push("/data");
        }
    }, [userDataFull]);

    return (
        <>
            <div className={styles["container"]}>
                <Header />
                <main className={styles["body"]}>{children}</main>
                {router.pathname === "/login" || router.pathname === "/register" ? null : <Footer />}
            </div>
        </>
    );
};
export default MainLayout;
