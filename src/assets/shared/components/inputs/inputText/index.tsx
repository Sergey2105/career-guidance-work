import { LegacyRef, useEffect, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";
import { IMask, IMaskInput, useIMask } from "react-imask";

const InputText = (props) => {
    const { placeholder, label, onChange, changeClear, type, error, value, fullerror = "true" } = props;
    const [textValue, setTextValue] = useState<string>("");

    const [mask] = useState([
        {
            type: "phone",
            mask: "+7 000 000 00 00",
            placeholderChar: "_",
            lazy: true,
            unmask: true,
        },
    ]);

    const currentType = mask.find((item) => item.type === type) as Record<string, any>;

    const { ref, maskRef } = useIMask<HTMLInputElement & typeof IMaskInput>(currentType, {
        onAccept: (value) => {
            setTextValue(value.replace(/\s+/g, ""));
        },
    });

    useEffect(() => {
        if (value && ref.current) {
            setTextValue(value);
            ref.current.value = value;
            maskRef.current?.updateValue();
        }
    }, [value, ref]);

    const onChangeText = (e) => {
        onChange?.(e);
        setTextValue(ref.current?.value || "");
    };
    const deleteInput = () => {
        setTextValue("");
        changeClear("");
        if (ref.current) {
            ref.current.value = "";
            maskRef.current?.updateValue();
        }
    };

    return (
        <div className={styles["input"]}>
            {label ? <span className={styles["input__label"]}>{label}</span> : null}
            <div className={styles["input__group"]}>
                <input
                    ref={ref as LegacyRef<HTMLInputElement> | undefined}
                    className={error ? styles["input__input__error"] : styles["input__input"]}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChangeText}
                    defaultValue={value}
                ></input>
                {textValue !== "" && textValue !== null ? (
                    <div className={styles["input__icon"]} onClick={deleteInput}>
                        <Cross />
                    </div>
                ) : null}
            </div>

            {fullerror ? <>{error ? <div className={styles["error"]}>{error}</div> : null}</> : null}
        </div>
    );
};
export default InputText;
