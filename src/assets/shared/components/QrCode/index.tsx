import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { selectUserFull } from "../store/slice/authSlice";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";

const QrCode = (props) => {
    const { id } = props;
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const switchModalVoting = () => {
        if (isFullscreen) {
            setIsFullscreen(false);
            document.body.style.overflow = "visible";
        } else {
            setIsFullscreen(true);
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <>
            <div className={styles["qr"]}>
                <div className={styles["qr__block"]} onClick={switchModalVoting}>
                    {id ? <QRCode renderAs="svg" value={id} width="" height="" /> : null}
                </div>
            </div>
            {isFullscreen && (
                <div className={styles["fullscreen-overlay"]} onClick={switchModalVoting}>
                    <div className={styles["qr__block"]}>{id ? <QRCode renderAs="svg" value={id} width="" height="" /> : null}</div>
                </div>
            )}
        </>
    );
};
export default QrCode;
