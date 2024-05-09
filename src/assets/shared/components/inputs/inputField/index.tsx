import { LegacyRef, useEffect, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";
import Pen from "/public/icons/pen.svg";
import Delete from "/public/icons/delete.svg";
import { IMask, IMaskInput, useIMask } from "react-imask";

const InputField = (props) => {
    const { placeholder, label, onChange, changeClear, type, error, value, internalID = "", removeInput, editField, cross } = props;
    const [textValue, setTextValue] = useState<string>("");

    const [mask] = useState([
        {
            type: "phone",
            mask: "70000000000",
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
        {
            type: "number",
            mask: Number,
            min: 1,
            max: 999999,
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
        if (value && ref.current) {
            setTextValue(value);
            ref.current.value = value;
            maskRef.current?.updateValue();
        }
    }, [value, ref]);

    const onChangeText = (e) => {
        onChange?.(e, internalID);
        setTextValue(ref.current?.value || "");
    };
    const deleteInput = () => {
        setTextValue("");
        changeClear?.(internalID);
        if (ref.current) {
            ref.current.value = "";
            maskRef.current?.updateValue();
        }
    };

    return (
        <div className={styles["input"]}>
            {label ? <span className={styles["input__label"]}>{label}</span> : null}
            <div className={styles["input__field__change"]}>
                <div className={styles["input__group"]}>
                    <input
                        ref={ref as LegacyRef<HTMLInputElement> | undefined}
                        className={error ? styles["input__field__error"] : styles["input__field"]}
                        type="text"
                        placeholder={placeholder}
                        onChange={onChangeText}
                        // value={value || ""}
                        defaultValue={value}
                    ></input>
                    {textValue !== "" && textValue !== null && cross ? (
                        <div className={styles["input__icon"]} onClick={deleteInput}>
                            <Cross />
                        </div>
                    ) : null}
                </div>
                <div className={styles["btns"]}>
                    <div onClick={removeInput} className={styles["btns__icon"]}>
                        <Delete />
                    </div>
                    <div onClick={editField} className={styles["btns__icon"]}>
                        <Pen />
                    </div>
                </div>
            </div>
            {error ? <div className={styles["error"]}>{error}</div> : null}
        </div>
    );
};
export default InputField;
