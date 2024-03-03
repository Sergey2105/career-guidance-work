import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import Profile from "/public/icons/profile.svg";
import { useDispatch, useSelector } from "../store/hooks";
import { getMe, logout, selectUser } from "../store/slice/authSlice";
import { useEffect } from "react";

const User = (props) => {
    const { onClick = () => null } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);

    const click = () => {
        dispatch(logout()).then(() => {
            router.push("/");
        });
    };

    return (
        <div className={styles["user"]}>
            <div className={styles["user__icon"]}>
                <div className={styles["user__btn"]} onClick={onClick}>
                    <Profile />
                </div>
            </div>
            {userData?.id ? (
                <div className={styles["user__name"]}>
                    <span>{userData?.first_name}</span>
                    <span>{userData?.last_name}</span>
                </div>
            ) : null}
        </div>
    );
};
export default User;
