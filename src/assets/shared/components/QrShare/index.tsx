import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { selectUserFull } from "../store/slice/authSlice";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";

const QrShare = (props) => {
    const [link, setLink] = useState("");
    useEffect(() => {
        const id = location.pathname.split("/").filter((el) => el)[1];
        setLink(`{process.env.NEXT_APP_BASE_URL}/meeting/${id}?source=qr`);
    }, []);

    return (
        <div className={styles["main"]}>
            <div className={styles["qr"]}>
                <div className={styles["qr__block"]}>{link ? <QRCode renderAs="svg" value={link} width="" height="" /> : null}</div>
            </div>
        </div>
    );
};
export default QrShare;
