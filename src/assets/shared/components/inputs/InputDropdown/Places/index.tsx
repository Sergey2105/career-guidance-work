import { useEffect, useRef, useState } from "react";
import Cross from "/public/icons/cross.svg";
import Arrow from "/public/icons/arrow.svg";
import styles from "../index.module.scss";

export type SelectOption = {
    label: string;
    value: string | number;
};

type MultipleSelectProps = {
    multiple?: true;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
    multiple?: false;
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
    options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export function InputDropdownPlaces(props) {
    const { value, onChange, options, label, multiple } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    function clearOptions() {
        onChange("");
    }

    function selectOption(option) {
        if (multiple) {
            const isOptionAlreadySelected = value.some((v) => v.id === option.id);
            if (isOptionAlreadySelected) {
                // Если элемент уже выбран, удаляем его из списка value
                onChange(value.filter((o) => o.id !== option.id));
            } else {
                // Иначе добавляем новый элемент в список value
                onChange([...value, option]);
            }
        } else {
            if (option.id !== value?.id) onChange(option);
        }
    }

    function isOptionSelected(option) {
        if (multiple) {
            return value.some((v) => v.id === option.id);
        } else {
            return value?.id === option.id;
        }
    }

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return;
            switch (e.code) {
                case "Enter":
                case "Space":
                    setIsOpen((prev) => !prev);
                    if (isOpen) selectOption(options[highlightedIndex]);
                    break;
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }

                    const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue);
                    }
                    break;
                }
                case "Escape":
                    setIsOpen(false);
                    break;
            }
        };
        containerRef.current?.addEventListener("keydown", handler);

        return () => {
            containerRef.current?.removeEventListener("keydown", handler);
        };
    }, [isOpen, highlightedIndex, options]);

    console.log(value);

    return (
        <>
            {label ? <span className={styles["label"]}>{label}</span> : null}
            <div ref={containerRef} onBlur={() => setIsOpen(false)} onClick={() => setIsOpen((prev) => !prev)} tabIndex={0} className={styles.container}>
                {value && Object.keys(value).length > 0 ? (
                    <span className={styles.value}>{`${value?.office} (${value.max_participant})`}</span>
                ) : (
                    <span className={styles.placeholder}>Выберете место проведения</span>
                )}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        clearOptions();
                    }}
                    className={styles["clear-btn"]}
                >
                    <Cross />
                </button>
                <div className={styles.divider}></div>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
                <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
                    {options?.length !== 0 ? (
                        <>
                            {options?.map((option, index) => (
                                <li
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        selectOption(option);
                                        setIsOpen(false);
                                    }}
                                    onMouseEnter={() => setHighlightedIndex(index)}
                                    key={option.id}
                                    className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""}`}
                                >
                                    {option.office} ({option.max_participant})
                                </li>
                            ))}
                        </>
                    ) : (
                        <li className={`${styles.option}`}>Нет доступных мест проведения</li>
                    )}
                </ul>
            </div>
        </>
    );
}
