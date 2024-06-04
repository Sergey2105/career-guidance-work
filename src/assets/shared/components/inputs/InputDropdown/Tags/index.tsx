/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Cross from "/public/icons/cross.svg";
import Arrow from "/public/icons/arrow.svg";
import styles from "../index.module.scss";
import InputText from "../../inputText";
import { tr } from "date-fns/locale";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export function InputDropdownTags(props) {
    const { multiple, value = [], onChange, options, placeholder, label, changeClear, type, error, changeSearch, changeLoginSearch } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    function clearOptions() {
        multiple ? onChange([]) : onChange("");
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
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen]);

    const switchOpen = () => {
        setIsOpen((prev) => !prev);
        changeLoginSearch("");
    };

    const refOutside = useOutsideClick(() => {
        setIsOpen(false);
    });

    return (
        <>
            {label ? <span className={styles["label"]}>{label}</span> : null}
            <div ref={refOutside} onClick={switchOpen} tabIndex={0} className={styles.container}>
                <span className={styles.value}>
                    {value.length !== 0 ? (
                        <>
                            {multiple
                                ? value.map((v) => (
                                      <button
                                          key={v.id}
                                          onClick={(e) => {
                                              e.stopPropagation();
                                              selectOption(v);
                                          }}
                                          className={styles["option-badge"]}
                                      >
                                          {v.tag_name}
                                          <div className={styles["remove-btn"]}>
                                              <Cross />
                                          </div>
                                      </button>
                                  ))
                                : value?.tag_name}
                        </>
                    ) : (
                        <span className={styles.placeholder}>Выберете теги мероприятия</span>
                    )}
                </span>
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
                {isOpen ? (
                    <div>
                        <div
                            className={styles.inp}
                            onClick={(e) => {
                                setIsOpen(false);
                            }}
                        >
                            <InputText onChange={changeSearch} changeClear={changeLoginSearch} placeholder={"Введите название тега"} />
                        </div>
                        <ul className={styles.options}>
                            {options?.length !== 0 ? (
                                <>
                                    {options?.map((option, index) => (
                                        <li
                                            onClick={(e) => {
                                                selectOption(option);
                                                setIsOpen(false);
                                            }}
                                            onMouseEnter={() => setHighlightedIndex(index)}
                                            key={option.id}
                                            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""}`}
                                        >
                                            {option.tag_name}
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <li className={`${styles.option}`}>Нет доступных тегов</li>
                            )}
                        </ul>
                    </div>
                ) : null}
            </div>
        </>
    );
}
