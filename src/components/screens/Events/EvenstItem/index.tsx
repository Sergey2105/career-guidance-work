import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

const EventItem = () => {
  return (
    <div className={styles["item"]}>
      {/* <Image src={""} alt={""} /> */}
      <div className={styles["item__text"]}>
        <span className={styles["item__text__label"]}>
          Lorem ipsum dolor sit amet
        </span>
        <span className={styles["item__text__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
          vestibulum lacus at lobortis. Etiam consequat erat enim, vitae
          ullamcorper lorem tempor eu. Curabitur a urna et nisi pretium
          porttitor. Nam nec elit metus.{" "}
        </span>
      </div>
    </div>
  );
};
export default EventItem;
