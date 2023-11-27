import { IoMdClose } from "react-icons/io";
import styles from "./index.module.scss";
import React, { useState } from "react";

interface IModal {
  onCloseModal: () => void;
  label: string;
}

const HeaderModal: React.FC<IModal> = (props) => {
  const { onCloseModal, label } = props;

  return (
    <header className={styles["header"]}>
      <div>
        <span>{label}</span>
      </div>
      <IoMdClose onClick={onCloseModal} className={styles["header__close"]} />
    </header>
  );
};
export default HeaderModal;
