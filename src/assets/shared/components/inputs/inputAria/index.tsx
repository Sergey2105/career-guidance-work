import { useEffect, useRef, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";

const InputAria = (props) => {
    const { placeholder, label, onChange, changeClear, type = "", error, value } = props;
    const ref = useRef<any>();
    const [textValue, setTextValue] = useState<string>("");

    useEffect(() => {
        if (value && ref.current) {
            setTextValue(value);
            ref.current.value = value;
        }
    }, [value, ref]);

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
                <textarea
                    ref={ref}
                    className={error ? styles["input__area__error"] : styles["input__area"]}
                    placeholder={placeholder}
                    onChange={onChangeText}
                    value={value}
                ></textarea>
            </div>
        </div>
    );
};
export default InputAria;
