import React from "react";
import Image from "next/image";
import NotFounde from "/public/img/404.png";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Button from "../buttons/Button";

const NotFoundError = () => {
    const router = useRouter();

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["main"]}>
                <div className={styles["body"]}>
                    <Image src={NotFounde} alt="NotFound" />
                    <div className={styles["body__btn"]}>
                        <Button type="default" onClick={() => router.push("/")}>
                            Вернуться на главную страницу
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotFoundError;
