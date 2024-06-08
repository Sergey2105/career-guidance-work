import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { activated, getMe, getMeFull, selectUser, selectUserFull } from "../../store/slice/authSlice";
import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null && Object.keys(userData).length === 0) {
            dispatch(getMe());
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("userToken");

        if (token !== null && userData?.id_profile && userData?.id_profile === "None") {
            dispatch(activated()).then(() => {
                dispatch(getMe());
            });
        }
    }, [userData]);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null && userData?.id_profile && userData?.id_profile !== "None") {
            dispatch(getMeFull(String(userData?.id_profile)));
        }
    }, [userData]);

    useEffect(() => {
        const redirectUrl = localStorage.getItem("redirectAfterLogin");
        if (userDataFull?.id && (userDataFull?.birthday === null || userDataFull?.birthday === "" || userDataFull?.phone === null || userDataFull?.phone === "")) {
            router.push("/data");
        }
    }, [userDataFull]);

    const isQrsharePage = router.pathname.startsWith("/qrshare");

    return (
        <>
            <div className={styles["container"]}>
                {isQrsharePage ? null : <Header />}
                <main className={styles["body"]}>{children}</main>
                {router.pathname === "/login" || router.pathname === "/register" || isQrsharePage ? null : <Footer />}
            </div>
        </>
    );
};
export default MainLayout;
