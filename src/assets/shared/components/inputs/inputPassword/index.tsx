import { useRef, useState } from "react";
import styles from "../index.module.scss";
import Visisble from "/public/icons/visible.svg";
import Unisisble from "/public/icons/unvisible.svg";

const InputPassword = (props) => {
    const { placeholder, label, onChange, error } = props;
    const [visible, setVisible] = useState<boolean>(false);
    const [type, setType] = useState<string>("password");

    const ref = useRef<any>();
    const [textValue, setTextValue] = useState<string>();

    const onChangeText = (e) => {
        onChange?.(e);
        setTextValue(ref.current.value);
    };

    const isVisible = () => {
        if (visible) {
            setVisible(false);
            setType("password");
        } else {
            setVisible(true);
            setType("text");
        }
    };

    return (
        <div className={styles["input"]}>
            <label className={styles["input__label"]}>{label}</label>
            <div className={styles["input__group"]}>
                <input ref={ref} type={type} className={error ? styles["input__input__error"] : styles["input__input"]} placeholder={placeholder} onChange={onChangeText}></input>
                <div className={styles["input__icon"]} onClick={isVisible}>
                    {visible ? <Visisble /> : <Unisisble />}
                </div>
            </div>
        </div>
    );
};
export default InputPassword;
