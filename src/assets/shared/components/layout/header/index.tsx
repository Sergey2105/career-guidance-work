import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import styles from "./index.module.scss";
import ModalLogin from "../../modal/ModalLogin";
import ButtonProfile from "../../buttons/ButtonProfile";

const Header: FC = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const pathname = usePathname();

    const windowOpen = () => {
        setOpenLogin(true);
        document.body.style.overflow = "hidden";
    };
    const windowClose = () => {
        setOpenLogin(false);
        document.body.style.overflow = "";
    };

    return (
        <header className={styles["header"]}>
            {openLogin && <ModalLogin onCloseModal={windowClose} />}
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
                            <Link href="/contact" className={`${pathname === "/contact" ? styles.active : ""} ${styles["link"]}`}>
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
            </div>
        </header>
    );
};
export default Header;
