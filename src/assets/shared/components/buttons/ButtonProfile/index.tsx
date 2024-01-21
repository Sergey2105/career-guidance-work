import styles from "./index.module.scss";
import React from "react";
import Profile from "/public/icons/profile.svg";

const ButtonProfile = (props: { windowOpen: any }) => {
    const { windowOpen } = props;
    return (
        <div className={styles["btn"]} onClick={windowOpen}>
            <Profile />
        </div>
    );
};
export default ButtonProfile;
