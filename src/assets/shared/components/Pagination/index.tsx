import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import ArrowLeft from "/public/icons/arrowleft.svg";
import ArrowRight from "/public/icons/arrowright.svg";
import clsx from "clsx";

const Pagination = (props) => {
    const { onChange, howManyPages, inputSearch, noNavigation = false } = props;
    const [currentButton, setCurrentButton] = useState<number>(1);
    const [pagEls, setPagEls] = useState<{ [key: string]: number | string }>();

    useEffect(() => {
        const newEls: { [key: string]: number | string } = {
            "1": 1,
            [howManyPages]: howManyPages,
        };
        if (howManyPages > 6) {
            if (currentButton <= 3 || currentButton + 3 >= howManyPages + 1) {
                const a = currentButton <= 4 ? 2 : howManyPages - 3;
                const b = currentButton <= 4 ? 4 : howManyPages - 1;
                newEls["..."] = currentButton <= 4 ? Number(((howManyPages + currentButton) / 2).toFixed()) + 1 : (currentButton / 2).toFixed();
                for (let i = a; i <= b; i++) {
                    newEls[String(i)] = i;
                }
            } else {
                newEls["... "] = Number((currentButton / 2).toFixed());
                newEls[currentButton - 1] = currentButton - 1;
                newEls[currentButton] = currentButton;
                newEls[currentButton + 1] = currentButton + 1;
                newEls[" ..."] = ((currentButton + howManyPages) / 2).toFixed();
            }
        } else {
            for (let i = 2; i < howManyPages; i++) {
                newEls[String(i)] = i;
            }
        }
        onChange(currentButton);
        setPagEls(newEls);
    }, [currentButton, howManyPages]);

    useEffect(() => {
        setCurrentButton(1);
    }, [inputSearch]);

    // console.log(currentButton);

    return (
        <div className={styles["pagination__container"]}>
            <Link
                type="button"
                className={clsx(styles["pagination__btn"], styles[`${currentButton === 1 ? "pagination__btn__disabled" : ""}`])}
                onClick={(e) => {
                    if (noNavigation) e.preventDefault();
                    setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1));
                }}
                href={noNavigation ? "" : `${currentButton === 1 ? "" : `?page=${currentButton - 1}`}`}
            >
                <ArrowLeft />
            </Link>
            {Object.entries(pagEls || {})
                .sort((a, b) => Number(a[1]) - Number(b[1]))
                .map((el, i) =>
                    el[1] === currentButton ? (
                        <span key={`${el[1]} - ${i}`} data-key={el[1]} className={clsx(styles["pagination__btn"], styles["pagination__btn__active"])}>
                            {el[0].trim()}
                        </span>
                    ) : (
                        <Link
                            key={`${el[1]} - ${i}`}
                            className={clsx(styles["pagination__btn"], styles[`${el[1] === currentButton ? "pagination__btn__active" : ""}`])}
                            onClick={(e) => {
                                if (noNavigation) e.preventDefault();
                                setCurrentButton(Number(el[1]));
                                onChange(Number(el[1]));
                            }}
                            href={noNavigation ? "" : `${Number(el[1]) === 1 ? "" : `?page=${el[1]}`}`}
                        >
                            {el[0].trim()}
                        </Link>
                    ),
                )}
            <Link
                type="button"
                className={clsx(styles["pagination__btn"], styles[`${currentButton === howManyPages ? "pagination__btn__disabled" : ""}`])}
                onClick={(e) => {
                    if (noNavigation) e.preventDefault();
                    setCurrentButton((prev) => (prev >= howManyPages ? prev : prev + 1));
                }}
                href={noNavigation ? "" : `${currentButton === howManyPages ? `?page=${currentButton}` : `?page=${currentButton + 1}`}`}
            >
                <ArrowRight />
            </Link>
        </div>
    );
};

export default Pagination;
