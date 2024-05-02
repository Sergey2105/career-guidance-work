import Button from "../buttons/Button";
import { useDispatch, useSelector } from "../store/hooks";
import { getEvent, selectEventProps } from "../store/slice/eventSlice";
import { addField, addVote } from "../store/slice/votings";
import styles from "./index.module.scss";
import Refresh from "/public/icons/refresh.svg";
import Pen from "/public/icons/pen.svg";
import ModalEditVoting from "../modal/ModalEditVoting";
import { useState } from "react";

const Voting = (props) => {
    const { value, edit } = props;

    const dispatch = useDispatch();
    const event = useSelector(selectEventProps);
    const [modalEditVoting, setModalEditVoting] = useState<boolean>(false);

    const reload = () => {
        dispatch(getEvent(String(event.id)));
    };

    const join = (id) => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            dispatch(addVote({ id: id }))
                .then(() => {
                    // dispatch(getEvent(String(event.id)));
                    // dispatch(getMeFull(String(userData.id_profile)));
                    // setSuccess(true);
                    // setTimeout(() => {
                    //     setSuccess(false);
                    // }, 2000);
                })
                .catch(() => {
                    // dispatch(getEvent(String(event.id)));
                    // dispatch(getMeFull(String(userData.id_profile)));
                    // setSuccess(true);
                    // setTimeout(() => {
                    //     setSuccess(false);
                    // }, 2000);
                });
        } else {
            // switchModalUnlogin();
        }
    };

    // const votingCount = value?.field[0]?.count_votes;

    // console.log(votingCount);

    const dfs = () => {
        dispatch(
            addField({
                name: "номер1",
                id: value?.id,
            }),
        );
    };

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
            {modalEditVoting ? <ModalEditVoting switchModalEditVoting={switchModalEditVoting} value={value} /> : null}
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
                    {value?.field.map((value, key) => (
                        <button key={key} className={styles["voting__item__btn"]} onClick={() => join(value.id)}>
                            <div>{value.name}</div>
                            <div></div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Voting;
