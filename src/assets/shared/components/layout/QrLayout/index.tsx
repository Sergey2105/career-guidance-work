import { activated, getMe, getMeFull, selectUser, selectUserFull } from "../../store/slice/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "../../store/hooks";
import { useRouter } from "next/router";

const QrLayout = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);


    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            dispatch(getMe());
        }
    }, []);

    // useEffect(() => {
    //     const token = localStorage.getItem("userToken");
    //     if (Object.keys(userData).length !== 0 && token !== null && userData?.id_profile !== "None") {
    //         dispatch(getMeFull(String(userData.id_profile)));
    //     }
    //     if (userData?.id_profile === "None") {
    //         dispatch(activated());
    //         router.push("/data");
    //     }
    // }, [userData]);
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
        if (userDataFull?.id && userDataFull?.birthday === null && userDataFull?.birthday === "") {
            router.push("/data");
        }
    }, [userDataFull]);

    return (
        <>
            <main>{children}</main>
        </>
    );
};
export default QrLayout;
