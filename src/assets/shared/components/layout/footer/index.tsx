import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import VK from "/public/icons/vk.svg";
import TG from "/public/icons/tg.svg";
import Mail from "/public/icons/mail.svg";

import styles from "./index.module.scss";

const Footer: FC = () => {
    const pathname = usePathname();
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__wrapper"]}>
                <div className={styles["footer__content"]}>
                    <div className={styles["footer__text"]}>Центр дополнительного образования КГУ</div>
                    <div className={styles["footer__link"]}>
                        <a target="_blank" href="https://vk.com/dop_obrazovanie_kgu">
                            <button className={styles["footer__btn"]}>
                                <VK />
                            </button>
                        </a>
                        <a target="_blank" href="https://t.me/dopobrazovaniye_ksu">
                            <button className={styles["footer__btn"]}>
                                <TG />
                            </button>
                        </a>
                        <a target="_blank" href="mailto:odpo@ksu.edu.ru">
                            <button className={styles["footer__btn"]}>
                                <Mail />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
