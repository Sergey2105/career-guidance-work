import { use, useEffect, useState } from "react";
import styles from "./index.module.scss";
import ModalLogin from "../../modal/ModalLogin";
import User from "../../User";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { closeMenu, openMenu, selectMenu } from "../../store/slice/menuSlice";
import Menu from "/public/icons/menu.svg";
import Cross from "/public/icons/cross.svg";
import clsx from "clsx";
import { useDispatch, useSelector } from "../../store/hooks";
import { getMe, selectUser } from "../../store/slice/authSlice";

const Header = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();
    const menu = useSelector(selectMenu);
    const dispatch = useDispatch();

    const windowOpen = () => {
        setOpenLogin(true);
        document.body.style.overflow = "hidden";
    };
    const windowClose = () => {
        setOpenLogin(false);
        document.body.style.overflow = "";
    };

    // выход

    // const logout = () => {
    //     dispatch(logout()).then(() => {
    //         router.push("/");
    //     });
    // };

    return (
        <header className={styles["header"]}>
            {openLogin && <ModalLogin onCloseModal={windowClose} />}
            <div className={styles["header__wrapper"]}>
                <div className={styles["header__content"]}>
                    <div className={styles["header__logo"]}>
                        <span>Logo</span>
                    </div>
                    <div className={styles["header__menu"]}>
                        <div className={clsx(styles["header__menu__visible"], styles[`${menu ? "header__menu__visible__active" : "header__menu__visible__disabled"}`])}>
                            <ul className={styles["header__list"]}>
                                <li>
                                    <Link href="/" className={styles[`${pathname === "/" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/meeting" className={styles[`${pathname === "/meeting" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Мероприятия
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className={styles[`${pathname === "/contact" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                            <div className={styles["header__user"]}>
                                <User windowOpen={windowOpen} />
                            </div>
                        </div>
                        <div className={styles["header__burger"]}>
                            {!menu ? (
                                <div>
                                    <button className={styles["header__burger__btn"]} onClick={() => dispatch(openMenu())}>
                                        <Menu />
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <button className={styles["header__burger__btn"]} onClick={() => dispatch(closeMenu())}>
                                        <Cross />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
