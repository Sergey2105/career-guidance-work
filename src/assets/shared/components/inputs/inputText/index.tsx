import { useRef, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";

const InputText = (props) => {
    const { placeholder, label, onChange, changeClear } = props;
    const ref = useRef<any>();
    const [textValue, setTextValue] = useState<string>("");

    const onChangeText = (e: any) => {
        onChange?.(e);
        setTextValue(ref.current.value);
    };
    const deleteInput = () => {
        ref.current.value = "";
        setTextValue("");
        changeClear("");
    };

    return (
        <div className={styles["input"]}>
            <label className={styles["input__label"]}>{label}</label>
            <div className={styles["input__group"]}>
                <input ref={ref} type="text" className={styles["input__input"]} placeholder={placeholder} onChange={onChangeText}></input>
                <div className={styles["input__icon"]} onClick={deleteInput}>
                    {textValue.length !== 0 ? <Cross /> : null}
                </div>
            </div>
        </div>
    );
};
export default InputText;
