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
                    <div className={styles["footer__text"]}>Профориентационная работа в КГУ</div>
                    <div className={styles["footer__link"]}>
                        <a target="_blank" href="">
                            <button className={styles["footer__btn"]}>
                                <VK />
                            </button>
                        </a>
                        <a target="_blank" href="">
                            <button className={styles["footer__btn"]}>
                                <TG />
                            </button>
                        </a>
                        <a target="_blank" href="">
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
