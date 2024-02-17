import Header from "../header";
import Footer from "../footer";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../store/hooks";
import { getMe, selectUser } from "../../store/slice/authSlice";
import { useEffect } from "react";

const MainLayout = (props: { children: any }) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);

    useEffect(() => {
        dispatch(getMe());
    }, []);

    useEffect(() => {
        // if (userData) {
        //     router.push(`/referrer=${window.location.pathname}`);
        // }
        if (userData.id && window.location.pathname == "/") {
            // router.push("/home");
        }
    }, [userData]);

    // console.log(userData);

    return (
        <>
            <Header />
            <main className={styles["body"]}>{children}</main>
            <Footer />
        </>
    );
};
export default MainLayout;
