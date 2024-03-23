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
import { activated, getMe, selectUser } from "../../store/slice/authSlice";
import Logo from "/public/img/logo.png";
import Image from "next/image";

const Header = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const menu = useSelector(selectMenu);
    const userData = useSelector(selectUser);

    // выход

    // const logout = () => {
    //     dispatch(logout()).then(() => {
    //         router.push("/");
    //     });
    // };

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
                                <li>
                                    <Link href="/" className={styles[`${pathname === "/" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/meeting" className={styles[`${pathname === "/meeting/" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Мероприятия
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/info" className={styles[`${pathname === "/info/" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Информация
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mymeeting" className={styles[`${pathname === "/mymeeting/" ? "link__active" : "link"}`]} onClick={() => dispatch(closeMenu())}>
                                        Мои мероприятия
                                    </Link>
                                </li>
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
