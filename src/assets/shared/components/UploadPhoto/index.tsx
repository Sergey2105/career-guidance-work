import React, { useState } from "react";
import styles from "./index.module.scss";
import Plus from "/public/icons/plus.svg";
import Cross from "/public/icons/cross.svg";

const UploadPhoto = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        event.target.value = "";
    };

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }

    console.log(selectedImages);

    return (
        <div className={styles["upload-container"]}>
            <label className={styles["upload-container__label"]}>
                <span>Добавить изображение</span>
                <div className={styles["upload-container__label__icon"]}>
                    <Plus />
                </div>
                <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png , image/jpeg" />
            </label>
            <div className={styles["images"]}>
                {selectedImages &&
                    selectedImages.map((image, index) => {
                        return (
                            <div key={image} className={styles["image"]}>
                                <img className={styles["image__img"]} src={image} alt="upload" />
                                <button onClick={() => deleteHandler(image)}>
                                    <Cross />
                                </button>
                                {/* <p>{index + 1}</p> */}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default UploadPhoto;
