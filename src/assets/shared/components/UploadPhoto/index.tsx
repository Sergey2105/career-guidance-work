import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Plus from "/public/icons/plus.svg";
import Cross from "/public/icons/cross.svg";
import { v4 as uuidv4 } from "uuid";

const UploadPhoto = (props) => {
    const { inputPhoto, setInputPhoto } = props;

    const [file, setFile] = useState<any>("");
    const [baseImage, setBaseImage] = useState<any>("");
    const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (inputPhoto?.length !== 0) {
            setIsImageVisible(true);
        } else {
            setIsImageVisible(false);
        }
    }, [inputPhoto]);

    const uploadImage = async (e) => {
        const file = e.target.files[0];

        if (file.size > 2000000) {
            e.target.value = "";
            setError(true);
            return;
        }
        const base64 = await convertBase64(file);
        setBaseImage(base64);
        setInputPhoto(base64);
        setIsImageVisible(true);
        setError(false);
        e.target.value = "";
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const removeImage = () => {
        setBaseImage("");
        setInputPhoto("");
        setIsImageVisible(false);
    };

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
            <div className={styles["upload-container"]}>
                {error ? (
                    <div className={styles["error"]}>
                        <span className={styles["error__text"]}>Размер фото не должен превышать 2 МБ</span>
                    </div>
                ) : null}
                {inputPhoto === "" || inputPhoto === null ? (
                    <label className={styles["upload-container__label"]}>
                        <span>Добавить изображение</span>
                        <div className={styles["upload-container__label__icon"]}>
                            <Plus />
                        </div>
                        <input type="file" onChange={uploadImage} accept="image/png , image/jpeg" />
                    </label>
                ) : null}
                {isImageVisible && inputPhoto !== null ? (
                    <div className={styles["images"]}>
                        <div className={styles["image"]}>
                            <img className={styles["image__img"]} src={inputPhoto} alt="upload" onClick={switchModalVoting} />
                            <button onClick={removeImage}>
                                <Cross />
                            </button>
                        </div>
                    </div>
                ) : null}
                {isFullscreen && (
                    <div className={styles["fullscreen-overlay"]} onClick={switchModalVoting}>
                        <img className={styles["fullscreen-image"]} src={inputPhoto} alt="fullscreen" />
                    </div>
                )}
            </div>
        </>
    );
};
export default UploadPhoto;
