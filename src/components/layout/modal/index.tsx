import InputText from "@/components/input/inputText";
import styles from "./index.module.scss";
import { IoMdClose } from "react-icons/io";
import InputPassword from "@/components/input/inputPassword";
import React, { useState } from "react";
import HeaderModal from "@/components/headerModal";
import ButtonConfirm from "@/components/button/buttonConfirm";

interface IModal {
  onCloseModal: () => void;
}

const Modal: React.FC<IModal> = (props) => {
  const { onCloseModal } = props;
  const [placeholder, setPlaceholder] = useState<string>("");
  const [label, setlabel] = useState<string>("");

  if (!open) return null;
  return (
    <div className={styles["backdrop"]} onClick={onCloseModal}>
      <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
        <div>
          <HeaderModal onCloseModal={onCloseModal} label={"Вход"} />
        </div>
        <div className={styles["body"]}>
          <div className={styles["body__input"]}>
            <InputText placeholder={"Введите логин"} label={"Логин"} />
          </div>
          <div className={styles["body__input"]}>
            <InputPassword placeholder={"Введите пароль"} label={"Пароль"} />
          </div>
        </div>
        <footer className={styles["footer"]}>
          <ButtonConfirm label={"Войти"} />
        </footer>
      </div>
    </div>
  );
};
export default Modal;
