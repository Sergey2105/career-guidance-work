import styles from "./index.module.scss";
import React from "react";
import { clsx } from "clsx";
import Cross from "/public/icons/cross.svg";

const ModalBase = (props) => {
    const { children, title, onCloseModal, footer, size = "default", zIndex = "50" } = props;

    return (
        <div className={clsx(styles["modal"], styles[`modal__${size}`])} onClick={onCloseModal} style={{ zIndex: zIndex }}>
            <div className={clsx(styles["modal__windows"], styles[`modal__${size}__windows`])} onClick={(e) => e.stopPropagation()}>
                <div className={clsx(styles["modal__header"], styles[`modal__${size}__header`])}>
                    <span className={clsx(styles["modal__header__title"], styles[`modal__${size}__header__title`])}>{title}</span>
                    <div className={clsx(styles["modal__header__icon"], styles[`modal__${size}__header__icon`])} onClick={onCloseModal}>
                        <Cross onClick={onCloseModal} />
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
