import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import styles from "./index.module.scss";
import Modal from "../../modal/modalLogin";
import Profile from "/public/icons/profile.svg";
import ButtonProfile from "../../buttons/buttonPropfile";

const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const windowOpen = () => {
        setOpen(true);
        document.body.style.overflow = "hidden";
    };
    const windowClose = () => {
        setOpen(false);
        document.body.style.overflow = "visible";
    };

    return (
        <header className={styles["header"]}>
            <div className={styles["header__wrapper"]}>
                <div className={styles["header__menu"]}>
                    <ul>
                        <li>
                            <Link href="/" className={`${pathname === "/" ? styles.active : ""} ${styles["link"]}`}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className={`${pathname === "/events" ? styles.active : ""} ${styles["link"]}`}>
                                Мероприятия
                            </Link>
                        </li>
                        <li>
                            <Link href="/c ontact" className={`${pathname === "/contact" ? styles.active : ""} ${styles["link"]}`}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <div className={styles["header__profile"]}>
                        <div className={styles["header__icon"]}>
                            <ButtonProfile windowOpen={windowOpen} />
                        </div>
                        <div className={styles["header__user"]}>
                            <span>Имя</span>
                            <span>Фамилия</span>
                        </div>
                    </div>
                </div>
                {open && <Modal onCloseModal={windowClose} />}
            </div>
        </header>
    );
};
export default Header;
