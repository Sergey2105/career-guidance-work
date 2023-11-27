import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import styles from "./index.module.scss";
import Modal from "../modal";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const windowClose = () => {
    setOpen(false);
  };
  const windowOpen = () => {
    setOpen(true);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__menu"]}>
          <ul>
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? styles.active : ""} ${
                  styles["link"]
                }`}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className={`${pathname === "/events" ? styles.active : ""} ${
                  styles["link"]
                }`}
              >
                Мероприятия
              </Link>
            </li>
            <li>
              <Link
                href="/c ontact"
                className={`${pathname === "/contact" ? styles.active : ""} ${
                  styles["link"]
                }`}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <FaUserAlt className={styles["header__icon"]} onClick={windowOpen} />
        </div>
        {open && <Modal onCloseModal={windowClose} />}
      </div>
    </header>
  );
};
export default Header;
