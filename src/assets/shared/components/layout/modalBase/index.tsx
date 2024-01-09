import styles from "./index.module.scss";
import React from "react";
import { clsx } from "clsx";
import { IoMdClose } from "react-icons/io";

const ModalBase = (props: { children: any; title: any; onCloseModal: any; footer: any; size?: "default" | undefined }) => {
    const { children, title, onCloseModal, footer, size = "default" } = props;

    return (
        <div className={clsx(styles["modal"], styles[`modal__${size}`])} onClick={onCloseModal}>
            <div className={clsx(styles["modal__windows"], styles[`modal__${size}__windows`])} onClick={(e) => e.stopPropagation()}>
                <div className={clsx(styles["modal__header"], styles[`modal__${size}__header`])}>
                    <span className={clsx(styles["modal__header__title"], styles[`modal__${size}__header__title`])}>{title}</span>
                    <div className={clsx(styles["modal__header__icon"], styles[`modal__${size}__header__icon`])} onClick={onCloseModal}>
                        <IoMdClose onClick={onCloseModal} className={styles["modal__header__cross"]} />
                    </div>
                </div>
                <div className={clsx(styles["modal__body"], styles[`modal__${size}__body`])}>{children}</div>
                <div className={clsx(styles["modal__footer"], styles[`modal__${size}__footer`])} style={{ gridTemplateColumns: `repeat(${footer.props.children.length}, 1fr)` }}>
                    {footer}
                </div>
            </div>
        </div>
    );
};
export default ModalBase;
