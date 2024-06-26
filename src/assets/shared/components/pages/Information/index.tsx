import React, { ReactElement, useState } from "react";
import styles from "./index.module.scss";
import InfoDropdown from "../../InfoDropdown";
import { useSelector } from "../../store/hooks";
import { selectLoadingUser, selectUserFull } from "../../store/slice/authSlice";
import Loader from "../../Loader";

const Information = (props) => {
    const loadingUser = useSelector(selectLoadingUser);
    const userDataFull = useSelector(selectUserFull);

    return (
        <>
            {loadingUser && userDataFull?.id ? <Loader /> : null}
            <div className={styles["wrapper"]}>
                <div className={styles["main"]}>
                    <span className={styles["main__header"]}>Информация</span>
                    <InfoDropdown header={"Информация о сервисе"}>
                        Данный сервис предоставляет возможность записаться на мероприятие по профориентационной подготовке на базе Костромского Государственного Университета.{" "}
                    </InfoDropdown>
                    <InfoDropdown header={"Виды мероприятий"}>
                        Профориентационные работы направлены на помощь людям в выборе профессий и имеют разнообразные виды.
                        <li>
                            Профориентирование – ознакомление с профессиями и их особенностями, спецификой рынка труда. Такая работа проводится в виде индивидуальных и групповых
                            консультаций. Профориентационное тестирование – заключается в диагностирования склонностей и способностей человека с помощью специальный методик
                            тестирования.
                        </li>
                        <li>
                            Консультирование – проводится в виде индивидуальных и групповых консультаций и задачей такого вида, является расшифровка результатов диагностических
                            методик и рекомендации относительно выбора профессии.
                        </li>
                        <li>
                            Психологическая поддержка – вид профориентационной работы, целью которого является помощь людям, которые испытывают затруднения в профессиональном
                            выборе.
                        </li>
                        <li>Профотбор – определение профпригодности человека к какой-то профессии или специальности.</li>
                    </InfoDropdown>
                </div>
            </div>
        </>
    );
};
export default Information;
