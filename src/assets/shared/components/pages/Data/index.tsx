import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useDispatch } from "../../store/hooks";
import { logout } from "../../store/slice/authSlice";
import Button from "../../buttons/Button";

const Data = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["header"]}>
                <div className={styles["header__info"]}>Для пользованя проверьте данные и заполните недостоющую инфомрацию</div>
            </div>
            <div className={styles["body"]}></div>
        </div>
    );
};
export default Data;
