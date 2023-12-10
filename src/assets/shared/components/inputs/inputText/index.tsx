import { useState } from "react";
import styles from "./index.module.scss";

const InputText = (props: { placeholder: string; label: string }) => {
  const { placeholder, label } = props;
  const [type, setType] = useState("");

  return (
    <div className={styles["input"]}>
      <label className={styles["input__label"]}>{label}</label>
      <input
        className={styles["input__input"]}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
export default InputText;
