/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header";
import Footer from "../footer";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { activated, getMe } from "../../store/slice/authSlice";
import { useEffect } from "react";
import { selectFullUser, userDate } from "../../store/slice/userSlice";

const MainLayout = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            dispatch(getMe());
        }
    }, []);

    // const fullUserData = useSelector(selectFullUser);
    // console.log(fullUserData);

    // useEffect(() => {
    //     dispatch(userDate());
    // }, []);
    // useEffect(() => {
    // if (userData) {
    //     router.push(`/referrer=${window.location.pathname}`);
    // }
    // if (userData.id && window.location.pathname == "/") {
    //     router.push("/meeting");
    // }
    // }, [userData]);

    // console.log(userData);

    return (
        <div className={styles["container"]}>
            <Header />
            <main className={styles["body"]}>{children}</main>
            {router.pathname === "/login" || router.pathname === "/register" ? null : <Footer />}
        </div>
    );
};
export default MainLayout;
