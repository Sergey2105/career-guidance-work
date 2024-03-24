// import { LegacyRef, lazy, useEffect, useRef, useState } from "react";
// import styles from "./index.module.scss";
// import Cross from "/public/icons/cross.svg";

// const InputDropdown = (props) => {
//     const { placeholder, label, onChange, changeClear, type, error, defaultValue } = props;
//     const ref = useRef<any>();
//     const [textValue, setTextValue] = useState<string>("");

//     const onChangeText = (e) => {
//         onChange?.(e);
//         setTextValue(ref.current?.value || "");
//     };
//     console.log(defaultValue);

//     return (
//         <div className={styles["input"]}>
//             {label ? <span className={styles["input__label"]}>{label}</span> : null}
//             <div className={styles["input__group"]}>
//                 <select ref={ref} onChange={onChangeText} className={error ? styles["input__input__error"] : styles["input__input"]}>
//                     {defaultValue?.map((item) => (
//                         // eslint-disable-next-line react/jsx-key
//                         <option className={styles["input__options"]} value={item.office}>
//                             {item.office}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// };
// export default InputDropdown;
import { useEffect, useRef, useState } from "react";
import Cross from "/public/icons/cross.svg";
import Arrow from "/public/icons/arrow.svg";
import styles from "./index.module.scss";

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

export function InputDropdown(props) {
    const { multiple, value, onChange, options, placeholder, label, changeClear, type, error, defaultValue } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    function clearOptions() {
        multiple ? onChange([]) : onChange("");
    }

    function selectOption(option: SelectOption) {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter((o) => o !== option));
            } else {
                onChange([...value, option]);
            }
        } else {
            if (option !== value) onChange(option);
        }
    }

    function isOptionSelected(option: SelectOption) {
        return multiple ? value.includes(option) : option === value;
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen]);

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

    return (
        <>
            {label ? <span className={styles["label"]}>{label}</span> : null}
            <div ref={containerRef} onBlur={() => setIsOpen(false)} onClick={() => setIsOpen((prev) => !prev)} tabIndex={0} className={styles.container}>
                <span className={styles.value}>
                    {multiple
                        ? value.map((v) => (
                              <button
                                  key={v.value}
                                  onClick={(e) => {
                                      e.stopPropagation();
                                      selectOption(v);
                                  }}
                                  className={styles["option-badge"]}
                              >
                                  {v.office}
                                  <span className={styles["remove-btn"]}>&times;</span>
                              </button>
                          ))
                        : value?.office}
                </span>
                {/* <div className={styles.icon}> */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        clearOptions();
                    }}
                    className={styles["clear-btn"]}
                >
                    <Cross />
                    {/* &times; */}
                </button>
                <div className={styles.divider}></div>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
                {/* </div> */}
                <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
                    {options.map((option, index) => (
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                selectOption(option);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            key={option.id}
                            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${index === highlightedIndex ? styles.highlighted : ""}`}
                        >
                            {option.office}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
