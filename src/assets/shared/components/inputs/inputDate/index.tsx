import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import styles from "../index.module.scss";
import Cross from "/public/icons/cross.svg";

import "react-day-picker/dist/style.css";
import FocusTrap from "focus-trap-react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import { usePopper } from "react-popper";
import { ru as dateFnsRu, Locale } from "date-fns/locale";
import moment from "moment";
import "moment/locale/ru";

const patchedLocale: Locale = {
    ...dateFnsRu,
    code: "ru",
    formatDistance: dateFnsRu.formatDistance || (() => ""),
    formatRelative: dateFnsRu.formatRelative || (() => ""),
    localize: {
        ...dateFnsRu.localize,
        day: dateFnsRu.localize?.day || (() => ""),
        month: dateFnsRu.localize?.month || (() => ""),
        ordinalNumber: dateFnsRu.localize?.ordinalNumber || (() => ""),
        era: dateFnsRu.localize?.era || (() => ""),
        quarter: dateFnsRu.localize?.quarter || (() => ""),
    },
    formatLong: dateFnsRu.formatLong || (() => ""),
    match: dateFnsRu.match || (() => ""),
    options: dateFnsRu.options || {},
};

const InputDate = (props) => {
    const { placeholder, label, onChange, changeClear, error, value } = props;
    const ref = useRef<any>();
    const [selected, setSelected] = useState<Date>();
    const [isPopperOpen, setIsPopperOpen] = useState<boolean>(false);
    const [textValue, setTextValue] = useState<string>(value);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

    const popper = usePopper(ref.current, popperElement, {
        placement: "bottom-start",
    });
    const closePopper = () => {
        setIsPopperOpen(false);
        ref?.current?.focus();
    };

    const handleButtonClick = () => {
        setIsPopperOpen(true);
    };

    const handleDaySelect: SelectSingleEventHandler = (date) => {
        setSelected(date);
        if (date) {
            setTextValue?.(moment(date).format("DD.MM.Y"));
            onChange?.(moment(date).format("DD.MM.Y"));

            closePopper();
        } else {
            setTextValue("");
        }
    };

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
    const deleteInput = (e) => {
        e.stopPropagation();
        ref.current.value = "";
        setTextValue("");
        changeClear("");
    };

    return (
        <div className={styles["input"]}>
            <label className={styles["input__label"]}>{label}</label>
            <div className={styles["input__group"]} onClick={handleButtonClick}>
                <input
                    ref={ref}
                    className={error ? styles["input__input__error"] : styles["input__input"]}
                    placeholder={placeholder}
                    onChange={onChangeText}
                    value={value || ""}
                    readOnly
                ></input>
                {textValue !== "" && textValue !== null ? (
                    <div className={styles["input__icon"]} onClick={deleteInput}>
                        <Cross />
                    </div>
                ) : null}
            </div>
            {isPopperOpen && (
                <FocusTrap
                    active
                    focusTrapOptions={{
                        initialFocus: false,
                        allowOutsideClick: true,
                        clickOutsideDeactivates: true,
                        onDeactivate: closePopper,
                        fallbackFocus: ref.current || undefined,
                    }}
                >
                    <div
                        tabIndex={-1}
                        style={popper.styles.popper}
                        className={styles["date"]}
                        {...popper.attributes.popper}
                        ref={setPopperElement}
                        role="dialog"
                        aria-label="DayPicker calendar"
                    >
                        <DayPicker
                            className={styles["date__date"]}
                            captionLayout="dropdown-buttons"
                            locale={patchedLocale}
                            initialFocus={isPopperOpen}
                            mode="single"
                            defaultMonth={selected}
                            selected={selected}
                            onSelect={handleDaySelect}
                            fromYear={1900}
                            toYear={2099}
                        />
                    </div>
                </FocusTrap>
            )}
        </div>
    );
};
export default InputDate;
