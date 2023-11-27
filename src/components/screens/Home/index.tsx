import React, { useState } from "react";
import styles from "./index.module.scss";
import ButtonConfirm from "@/components/button/buttonConfirm";
import Question from "@/components/question";

const HomePage = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["home__main"]}>
        <div className={styles["home__wrapper"]}>
          <span className={styles["home__motto"]}>
            Твой календарь мероприятий, твой путь к профессиональному росту!
          </span>
          <div className={styles["home__motto__btn"]}>
            <ButtonConfirm label={"Подробнее"} />
          </div>
        </div>
      </div>
      <div className={styles["home__second"]}>
        <div className={styles["home__wrapper"]}>
          <p className={styles["home__motto__second"]}>
            Воплоти свой потенциал!
          </p>
        </div>
      </div>
      <div className={styles["home__information"]}>
        <span className={styles["home__information__label"]}>
          Часто задаваемые вопросы
        </span>
        <div className={styles["home__information__information"]}>
          <Question />
        </div>
        <div className={styles["home__information__information"]}>
          <Question />
        </div>
        <div className={styles["home__information__information"]}>
          <Question />
        </div>
      </div>
      <div className={styles["home__join"]}>
        <span className={styles["home__join__label"]}></span>
        <div className={styles["home__join__btn"]}>
          <ButtonConfirm label={"Присоедениться"} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
