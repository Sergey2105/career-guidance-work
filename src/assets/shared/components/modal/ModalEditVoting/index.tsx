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
import { addField, createVoting, deleteVoting, destroyField } from "../../store/slice/votings";
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

    useEffect(() => {
        if (value && value.field && Array.isArray(value.field)) {
            const names = value.field.map((fieldItem) => fieldItem.name);
            setInputValue((prevState) => ({ ...prevState, name: names }));
        }
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

    const arr = ["поле", "поле 1", "поле 2 авыа авав авав"];

    const result = arr.map((item) => item.replace(/ /g, "_")).join(" ");

    console.log(result);

    const saveField = () => {
        dispatch(addField({ id: value.id, name: result })).then((res) => {
            if (res.type.includes("fulfilled")) {
                switchModalEditVoting();
            }
        });
    };

    const deleteVotings = () => {
        // dispatch(deleteVoting({ id: value.id })).then((res) => {
        //     if (res.type.includes("fulfilled")) {
        //         setSuccess(true);
        //         setTimeout(() => {
        //             setSuccess(false);
        //             switchModalEditVoting();
        //         }, 2000);
        //     } else {
        //         setSuccess(true);
        //         setTimeout(() => {
        //             setSuccess(false);
        //         }, 2000);
        //     }
        // });
        dispatch(deleteVoting({ id: value.id })).then(() => {
            switchModalEditVoting();
            dispatch(getEvent(String(event.id)));
        });
    };

    console.log(inputValue.name);
    console.log(newInput);

    // console.log(inputValue.name[0]);

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    // console.log(success);
    // console.log(messageError);
    //success не очищается и нужно 3 условия

    return (
        <>
            {/* {success ? (
                <div className={styles["modal"]}>
                    <Message error={messageError}>{messageError?.detail != null ? messageError?.detail : "Запись успешно изменена!"}</Message>
                </div>
            ) : null} */}
            <ModalBase
                title={value?.name}
                onCloseModal={switchModalEditVoting}
                size="large"
                footer={
                    <>
                        <Button type="white" onClick={switchModalEditVoting}>
                            Закрыть
                        </Button>
                        <Button type="default" onClick={saveField}>
                            Изменить
                        </Button>
                    </>
                }
            >
                <div className={styles["body"]}>
                    {newInput.map((el) => (
                        <div className={styles["body__input"]} key={`input-${el.id}`}>
                            <InputField
                                internalID={el.id}
                                removeInput={() => removeInput(el.id)}
                                placeholder={"Введите название поля"}
                                label={"Название поля"}
                                onChange={changeArray}
                                changeClear={changeTitleClear}
                                value={el?.name}
                                // saveField={() => saveField(index)}
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
