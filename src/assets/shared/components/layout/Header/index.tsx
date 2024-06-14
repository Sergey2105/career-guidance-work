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
import { activated, getMe, selectUser, selectUserFull } from "../../store/slice/authSlice";
import Logo from "/public/img/logo.png";
import Image from "next/image";
import Nophoto from "/public/img/nophoto.jpeg";

const Header = () => {
    const [isToken, setIsToken] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const menu = useSelector(selectMenu);
    const userData = useSelector(selectUser);
    const userDataFull = useSelector(selectUserFull);

    const pathLogin = () => {
        if (localStorage.getItem("userToken")) {
            const path = location.pathname.split("/").filter((el) => el)[0];
            if (path === "profile") {
                router.push(`/profile/${userData.id_profile}`).then(() => router.reload());
            } else {
                router.push(`/profile/${userData.id_profile}`);
            }
        } else {
            router.push("/login");
        }
        dispatch(closeMenu());
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("userToken");
            if (token === null) {
                setIsToken(false);
            } else {
                setIsToken(true);
            }
        }
    }, []);

    return (
        <header className={styles["header"]}>
            <div className={styles["header__wrapper"]}>
                <div className={styles["header__content"]}>
                    <div className={styles["header__logo"]} onClick={() => router.push("/")}>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className={styles["header__menu"]}>
                        <div className={clsx(styles["header__menu__visible"], styles[`${menu ? "header__menu__visible__active" : "header__menu__visible__disabled"}`])}>
                            <ul className={styles["header__list"]}>
                                <li className={styles["header__list__item"]}>
                                    <Link href="/" className={styles["link"]} onClick={() => dispatch(closeMenu())}>
                                        Главная
                                    </Link>
                                </li>
                                <li className={styles["header__list__item"]}>
                                    <Link href="/meeting" className={styles["link"]} onClick={() => dispatch(closeMenu())}>
                                        Мероприятия
                                    </Link>
                                </li>
                                <li className={styles["header__list__item"]}>
                                    <Link href="/info" className={styles["link"]} onClick={() => dispatch(closeMenu())}>
                                        Информация
                                    </Link>
                                </li>
                                {userDataFull?.teacher_permission ? (
                                    <li className={styles["header__list__item"]}>
                                        <Link href="/mymeeting" className={styles["link"]} onClick={() => dispatch(closeMenu())}>
                                            Мои мероприятия
                                        </Link>
                                    </li>
                                ) : null}
                            </ul>
                            <div className={styles["header__user"]}>
                                <User onClick={pathLogin} />
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
                {menu ? <div className={styles["header__background"]} onClick={() => dispatch(closeMenu())}></div> : null}
            </div>
        </header>
    );
};
export default Header;
