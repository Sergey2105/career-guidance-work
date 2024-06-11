import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputText from "../../inputs/inputText";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createTimetable, editTimetable, getEvent, getPlaces, selectErrorsTimetable, selectPlace } from "../../store/slice/eventSlice";
import { useDispatch } from "../../store/hooks";
import { InputDropdownPlaces } from "../../inputs/InputDropdown/Places";
import Message from "../../Message";
import { addField, createVoting, deleteVoting, destroyField, renameField, renameVoting } from "../../store/slice/votings";
import InputField from "../../inputs/inputField";
import Plus from "/public/icons/plus.svg";

const ModalEditVoting = (props) => {
    const { switchModalEditVoting, event, value } = props;
    const dispatch = useDispatch();
    const [inputTitle, setInputTitle] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const messageError = useSelector(selectErrorsTimetable);
    const [newInput, setNewInput] = useState<Array<any>>(value?.field);
    const [inputValue, setInputValue] = useState<any>({});

    // useEffect(() => {
    //     if (value && value.field && Array.isArray(value.field)) {
    //         const names = value.field.map((fieldItem) => fieldItem.name);
    //         setInputValue((prevState) => ({ ...prevState, name: names }));
    //     }
    // }, [value]);

    useEffect(() => {
        setInputTitle(value?.name);
    }, [value]);

    const changeArray = (e, id) => {
        const arrayChange = newInput.map((el) => {
            if (el.id === id) {
                return { ...el, value: e.target.value };
            }
            return el;
        });
        setNewInput(arrayChange);
        setInputValue((prevState) => ({ ...prevState, name: arrayChange.map((el) => el.value) }));
    };

    const addInput = () => {
        let max = 0;
        newInput.forEach((el) => {
            if (el.id > max) {
                max = el.id;
            }
        });
        setNewInput([...newInput, { id: max + 1, value: "" }]);
    };

    const removeInput = (id) => {
        const arrayRemove = newInput.filter((el) => el.id !== id);
        setNewInput(arrayRemove);
        setInputValue((prevState) => ({ ...prevState, name: arrayRemove.map((el) => el.value) }));
        dispatch(destroyField({ id: id }));
    };

    const filteredArray = newInput.filter((item) => !item.hasOwnProperty("vote"));

    const valueArray = filteredArray.map((item) => item.value);

    const result = valueArray.map((item) => item.replace(/ /g, "_")).join(" ");

    console.log(valueArray);

    const saveField = () => {
        if (inputTitle !== value?.name) {
            dispatch(renameVoting({ id: value.id, name: inputTitle })).then((res) => {
                if (res.type.includes("fulfilled")) {
                    if (res.type.includes("fulfilled")) {
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                            switchModalEditVoting();
                            dispatch(getEvent(String(event.id)));
                        }, 2000);
                    } else {
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 2000);
                    }
                }
            });
        }
        if (result.replace(/\s+/g, "").length !== 0) {
            dispatch(addField({ id: value.id, name: result })).then((res) => {
                if (res.type.includes("fulfilled")) {
                    if (res.type.includes("fulfilled")) {
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                            switchModalEditVoting();
                            dispatch(getEvent(String(event.id)));
                        }, 2000);
                    } else {
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 2000);
                    }
                }
            });
        }
        if (inputValue.name && inputValue.name.length > 0 && newInput.length !== 0) {
            newInput.forEach((el, index) => {
                const value = inputValue.name[index];
                if (value !== undefined) {
                    dispatch(renameField({ id: el.id, name: value })).then((res) => {
                        // if (res.type.includes("fulfilled")) {
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                            switchModalEditVoting();
                            dispatch(getEvent(String(event.id)));
                        }, 2000);
                        // } else {
                        //     setSuccess(true);
                        //     setTimeout(() => {
                        //         setSuccess(false);
                        //     }, 2000);
                        // }
                    });
                }
            });
        }
    };

    const deleteVotings = () => {
        dispatch(deleteVoting({ id: value.id })).then(() => {
            switchModalEditVoting();
            dispatch(getEvent(String(event.id)));
        });
    };

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    const disabled = inputTitle.length === 0 || valueArray.some((element) => element === "");

    return (
        <>
            {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.detail != null ? messageError?.detail : "Опрос успешно изменен!"}</Message>
                </div>
            ) : null}
            <ModalBase
                title={value?.name}
                onCloseModal={switchModalEditVoting}
                size="large"
                footer={
                    <>
                        <Button type="white" onClick={switchModalEditVoting}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={saveField} disabled={disabled}>
                            Сохранить
                        </Button>
                    </>
                }
            >
                <div className={styles["body"]}>
                    <div className={styles["body__input"]}>
                        <InputText placeholder={"Введите название опроса"} label={"Название опроса"} onChange={changeTitle} changeClear={changeTitleClear} value={inputTitle} />
                    </div>
                    {newInput.map((el, index) => (
                        <div className={styles["body__input"]} key={`input-${el.id}`}>
                            <InputField
                                internalID={el.id}
                                removeInput={() => removeInput(el.id)}
                                placeholder={"Введите название поля"}
                                label={"Название поля"}
                                onChange={changeArray}
                                changeClear={changeTitleClear}
                                value={el?.name}
                                cross={false}
                            />
                        </div>
                    ))}
                    <div>
                        <button onClick={addInput} className={styles["btn"]}>
                            <span className={styles["btn__text"]}>Добавить поле</span>
                            <div className={styles["btn__icon"]}>
                                <Plus />
                            </div>
                        </button>
                        <div className={styles["btn__delete"]}>
                            <Button type="delete" onClick={deleteVotings}>
                                Удалить опрос
                            </Button>
                        </div>
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalEditVoting;
