import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Plus from "./../../../../public/img/plus.svg";

const Question = () => {
  return (
    <div className={styles["question"]}>
      <div className={styles["question__text"]}>
        <span className={styles["question__text__label"]}>
          What events are available?
        </span>
        <span className={styles["question__text__more"]}>
          We offer a wide range of events including workshops, seminars, and
          networking sessions.
        </span>
      </div>
      {/* <Image src={Plus} alt={"Plus"} /> */}
    </div>
  );
};
export default Question;
