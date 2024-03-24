import { LegacyRef, lazy, useEffect, useRef, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";
import { IMask, IMaskInput, useIMask } from "react-imask";

const InputText = (props) => {
    const { placeholder, label, onChange, changeClear, type, error, defaultValue } = props;
    const [textValue, setTextValue] = useState<string>("");

    const [mask] = useState([
        {
            type: "phone",
            mask: "79999999999",
            placeholderChar: "_",
            lazy: true,
            unmask: true,
        },
        {
            type: "date",
            mask: Date,
            pattern: "d{.}`m{.}`Y",
            blocks: {
                d: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 31,
                    maxLength: 2,
                },
                m: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                },
                Y: {
                    mask: IMask.MaskedRange,
                    from: 1900,
                    to: 2099,
                    maxLength: 4,
                },
            },
            autofix: true,
            lazy: true,
        },
        {
            type: "time",
            mask: "HH:MM",
            blocks: {
                HH: {
                    mask: IMask.MaskedRange,
                    placeholderChar: "HH",
                    from: 0,
                    to: 23,
                    maxLength: 2,
                },
                MM: {
                    mask: IMask.MaskedRange,
                    placeholderChar: "MM",
                    from: 0,
                    to: 59,
                    maxLength: 2,
                },
            },
            overwrite: true,
            autofix: true,
        },
    ]);

    const currentType = mask.find((item) => item.type === type) as Record<string, any>;

    const { ref, maskRef } = useIMask<HTMLInputElement & typeof IMaskInput>(currentType, {
        onAccept: (value) => {
            setTextValue(value.replace(/\s+/g, ""));
        },
    });

    useEffect(() => {
        if (defaultValue && ref.current) {
            setTextValue(defaultValue);
            ref.current.value = defaultValue;
            maskRef.current?.updateValue();
        }
    }, [defaultValue, ref]);

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
                    defaultValue={defaultValue}
                ></input>
                {textValue !== "" && textValue !== null ? (
                    <div className={styles["input__icon"]} onClick={deleteInput}>
                        <Cross />
                    </div>
                ) : null}
            </div>
        </div>
    );
};
export default InputText;
