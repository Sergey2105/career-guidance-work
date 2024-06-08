import { useDispatch, useSelector } from "../store/hooks";
import { getEvent, selectEventProps } from "../store/slice/eventSlice";
import { addVote, removeVote } from "../store/slice/votings";
import styles from "./index.module.scss";
import Refresh from "/public/icons/refresh.svg";
import Pen from "/public/icons/pen.svg";
import ModalEditVoting from "../modal/ModalEditVoting";
import { useState } from "react";
import { selectUser } from "../store/slice/authSlice";
import ModalUnauth from "../modal/ModalUnauth";
import clsx from "clsx";

const Voting = (props) => {
    const { value, edit, voting } = props;

    const dispatch = useDispatch();
    const event = useSelector(selectEventProps);
    const userData = useSelector(selectUser);
    const [modalEditVoting, setModalEditVoting] = useState<boolean>(false);
    const [modalUnlogin, setModalUnlogin] = useState<boolean>(false);

    const reload = () => {
        dispatch(getEvent(String(event.id)));
    };

    const switchModalUnlogin = () => {
        if (modalUnlogin) {
            setModalUnlogin(false);
            document.body.style.overflow = "visible";
        } else {
            setModalUnlogin(true);
            document.body.style.overflow = "hidden";
        }
    };

    const join = (id) => {
        const token = localStorage.getItem("userToken");
        if (token !== null && voting) {
            dispatch(addVote({ id: id })).then(() => {
                reload();
                // dispatch(getEvent(String(event.id)));
                // dispatch(getMeFull(String(userData.id_profile)));
                // setSuccess(true);
                // setTimeout(() => {
                //     setSuccess(false);
                // }, 2000);
            });
        } else {
            switchModalUnlogin();
        }
    };

    const remove = (id) => {
        const token = localStorage.getItem("userToken");
        if (token !== null && voting) {
            dispatch(removeVote({ id: id })).then(() => {
                reload();
                // dispatch(getEvent(String(event.id)));
                // dispatch(getMeFull(String(userData.id_profile)));
                // setSuccess(true);
                // setTimeout(() => {
                //     setSuccess(false);
                // }, 2000);
            });
        } else {
            switchModalUnlogin();
        }
    };

    const changeVote = (item) => {
        if (voting) {
            if (item.users && item.users.includes(Number(userData?.id_profile))) {
                // Если id пользователя уже есть, вызываем функцию remove
                remove(item.id);
            } else {
                // Если id пользователя отсутствует, вызываем функцию join
                join(item.id);
            }
        }
    };

    // const votingCount = value?.field[0]?.count_votes;

    const switchModalEditVoting = () => {
        if (modalEditVoting) {
            setModalEditVoting(false);
            document.body.style.overflow = "visible";
            // dispatch(getEvent(String(event.id)));
        } else {
            setModalEditVoting(true);
            document.body.style.overflow = "hidden";
            // dispatch(getEvent(String(event.id)));
        }
    };
    return (
        <>
            {modalUnlogin ? <ModalUnauth text={"Для голосования необходмо авторизоваться"} switchModal={switchModalUnlogin} /> : null}
            {modalEditVoting ? <ModalEditVoting switchModalEditVoting={switchModalEditVoting} value={value} event={event} /> : null}
            <div className={styles["voting"]}>
                <div className={styles["voting__header"]}>
                    <div className={styles["voting__header__title"]}>{value.name}</div>
                    <div className={styles["voting__header__btn"]}>
                        <div className={styles["voting__header__btns"]} onClick={reload}>
                            <Refresh />
                        </div>
                        {edit ? (
                            <div className={styles["voting__header__btns"]} onClick={switchModalEditVoting}>
                                <Pen />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className={styles["voting__item"]}>
                    {value?.field.map((item, key) => (
                        <button
                            key={key}
                            className={clsx(styles["voting__item__btn"], item.users.includes(Number(userData?.id_profile)) ? styles["voting__item__btn__active"] : "")}
                            onClick={() => changeVote(item)}
                        >
                            <div>{item.name}</div>
                            {value.all_votes !== 0 ? <div>{`${Math.floor((item.count_votes / value.all_votes) * 100)}%`}</div> : null}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Voting;
