import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "../store/hooks";
import { selectUser, selectUserFull } from "../store/slice/authSlice";
import Nophoto from "/public/img/nophoto.jpeg";
import Image from "next/image";
import Resizer from "react-image-file-resizer";
import { useEffect, useState } from "react";

const User = (props) => {
    const { onClick = () => null } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);
    const [smallImg, setSmallImg] = useState<any>();

    const base64ToFile = (base64, filename) => {
        const arr = base64.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        u8arr.forEach((_, i) => {
            u8arr[i] = bstr.charCodeAt(i);
        });

        return new File([u8arr], filename, { type: mime });
    };

    useEffect(() => {
        if (userDataFull?.profile_pic) {
            const file = base64ToFile(userDataFull.profile_pic, "profile_pic.jpeg");

            Resizer.imageFileResizer(
                file,
                200, // new image max width
                200, // new image max height
                "JPEG", // format
                100, // quality
                0, // rotation
                (uri) => {
                    return setSmallImg(uri);
                },
                "base64", // output type
            );
        }
    }, [userDataFull]);

    return (
        <div className={styles["user"]}>
            <div className={styles["user__icon"]}>
                <div className={styles["user__btn"]} onClick={onClick}>
                    {userDataFull?.profile_pic ? (
                        <img className={styles["user__btn__img"]} src={smallImg} alt="Uploaded" height="200px" />
                    ) : (
                        <Image className={styles["user__btn__img"]} src={Nophoto} alt={"room"} objectFit="contain" />
                    )}
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
