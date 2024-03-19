import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { selectUserFull } from "../store/slice/authSlice";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";

const QrCode = (props) => {
    const [id, setID] = useState<string>("");

    const userDataFull = useSelector(selectUserFull);

    useEffect(() => {
        if (userDataFull) {
            setID(userDataFull.id);
        }
    }, [userDataFull]);

    return (
        <div className={styles["qr"]}>
            <div className={styles["qr__title"]}>Ваш QR код для прохода на мероприятие</div>
            <div className={styles["qr__block"]}>{userDataFull.id ? <QRCode value={id} width="" height="" /> : null}</div>
            <span className={styles["qr__text"]}></span>
        </div>
    );
};
export default QrCode;
