import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import ModalBase from "../../modalBase";
import { useRouter } from "next/router";
import Button from "../../buttons/Button";
import InputDate from "../../inputs/inputDate";
import InputText from "../../inputs/inputText";
import InputTime from "../../inputs/inputTime";
import { useSelector } from "react-redux";
import { createTimetable, editTimetable, getPlaces, selectErrorsTimetable, selectPlace } from "../../store/slice/eventSlice";
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

    const saveField = (id) => {
        console.log(id);
        console.log(inputValue.name[id - 1]);
        dispatch(addField({ id: value.id, name: inputValue.name[id - 1] }));
    };

    const deleteVotings = (id) => {
        dispatch(deleteVoting({ id: value.id }));
    };

    console.log(inputValue.name);

    // console.log(inputValue.name[0]);

    const changeTitle = (e) => {
        setInputTitle(e.target.value);
    };

    const changeTitleClear = () => {
        setInputTitle("");
    };

    const disabled = inputTitle.length === 0;

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
                        <Button type="delete" disabled={disabled} onClick={() => deleteVotings}>
                            Удалить
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
                                saveField={() => saveField(el?.id)}
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
                    </div>
                </div>
            </ModalBase>
        </>
    );
};
export default ModalEditVoting;
