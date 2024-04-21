import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { selectUserFull } from "../store/slice/authSlice";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";

const QrCode = (props) => {
    const { id } = props;
    // const [id, setID] = useState<string>("");

    // const userDataFull = useSelector(selectUserFull);

    // useEffect(() => {
    //     if (userDataFull) {
    //         setID(String(userDataFull?.id));
    //     }
    // }, [userDataFull]);

    return (
        <div className={styles["qr"]}>
            <div className={styles["qr__block"]}>{id ? <QRCode renderAs="svg" value={id} width="" height="" /> : null}</div>
        </div>
    );
};
export default QrCode;
