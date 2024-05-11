import React, { useState } from "react";
import styles from "./index.module.scss";
import Plus from "/public/icons/plus.svg";
import Cross from "/public/icons/cross.svg";
import { v4 as uuidv4 } from "uuid";

const UploadPhoto = () => {
    const [selectedImages, setSelectedImages] = useState<{ uuid: string; file: File }[]>([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles) as File[];

        const imagesArray = selectedFilesArray.map((file) => {
            // return URL.createObjectURL(file);
            const uuid = uuidv4(); // Generate UUID for the file
            console.log(uuid);
            return { uuid, file };
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        event.target.value = "";
    };

    function deleteHandler(uuid: string) {
        // setSelectedImages(selectedImages.filter((e) => e !== image));
        // URL.revokeObjectURL(image);
        setSelectedImages(selectedImages.filter((image) => image.uuid !== uuid));
    }

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
                    selectedImages.map(({ uuid, file }, index) => {
                        return (
                            <div key={uuid} className={styles["image"]}>
                                <img className={styles["image__img"]} src={URL.createObjectURL(file)} alt="upload" />
                                <button onClick={() => deleteHandler(uuid)}>
                                    <Cross />
                                </button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default UploadPhoto;
