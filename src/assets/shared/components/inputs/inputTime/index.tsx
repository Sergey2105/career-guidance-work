import { useEffect, useRef, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";

const InputTime = (props) => {
    const { placeholder, label, onChange, changeClear, type = "", error, defaultValue } = props;
    const ref = useRef<any>();
    const [textValue, setTextValue] = useState<string>("");

    useEffect(() => {
        if (defaultValue && ref.current) {
            setTextValue(defaultValue);
            ref.current.value = defaultValue;
        }
    }, [defaultValue, ref]);

    const onChangeText = (e) => {
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
                <input
                    ref={ref}
                    type="time"
                    className={error ? styles["input__input__error"] : styles["input__input"]}
                    placeholder={placeholder}
                    onChange={onChangeText}
                    defaultValue={defaultValue}
                ></input>
            </div>
        </div>
    );
};
export default InputTime;
