/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { activated, getMe, getMeFull, selectUser, selectUserFull } from "../../store/slice/authSlice";
import { useEffect, useMemo } from "react";
import { useGetUserQuery } from "../../store/services/getUser";
import Loader from "../../Loader";

const MainLayout = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);

    console.log(userDataFull);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null && Object.keys(userData).length === 0) {
            dispatch(getMe());
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (Object.keys(userData).length !== 0 && token !== null && userData?.id_profile !== "None") {
            dispatch(getMeFull(String(userData?.id_profile)));
        }
        if (userData?.id_profile === "None") {
            dispatch(activated());
            router.push("/data");
        }
    }, [userData]);

    useEffect(() => {
        if (userDataFull?.id && userDataFull?.birthday === null && userDataFull?.birthday === "" && userDataFull?.phone === null && userDataFull?.phone === "") {
            router.push("/data");
        }
    }, [userDataFull]);

    // const redirectUrl = localStorage.getItem("redirectAfterLogin");
    // dispatch(login({ username: inputLogin, password: inputPassword })).then((res) => {
    //     if (res.type.includes("fulfilled")) {
    //         if (redirectUrl) {
    //             if (userDataFull?.id && userDataFull?.birthday === null && userDataFull?.birthday === "" && userDataFull?.phone === null && userDataFull?.phone === "") {
    //                 // Сохраните redirectUrl перед переходом на страницу данных
    //                 localStorage.setItem("redirectAfterData", redirectUrl);
    //                 router.push("/data");
    //             } else {
    //                 router.push(redirectUrl);
    //             }
    //         } else {
    //             router.push("/");
    //         }
    //     }
    // });

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
