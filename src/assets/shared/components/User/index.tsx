import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import Profile from "/public/icons/profile.svg";
import { useDispatch, useSelector } from "../store/hooks";
import { getMe, logout, selectUser } from "../store/slice/authSlice";
import { useEffect } from "react";

const User = (props) => {
    const { windowOpen } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);

    // console.log(userData);

    const click = () => {
        dispatch(logout()).then(() => {
            router.push("/");
        });
    };

    // useEffect(() => {
    //     dispatch(getMe());
    // }, []);

    return (
        <div className={styles["user"]}>
            <div className={styles["user__icon"]}>
                <div className={styles["user__btn"]} onClick={windowOpen}>
                    <Profile />
                </div>
            </div>
            <div className={styles["user__name"]}>
                <span>{userData?.first_name}</span>
                <span>{userData?.last_name}</span>
            </div>
            <button onClick={click}>выйти</button>
        </div>
    );
};
export default User;
