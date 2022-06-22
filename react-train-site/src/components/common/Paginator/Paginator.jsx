import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; 1 <= pagesCount; i++) {
        pages.push(i);
        if (i > 300) break
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let lefPotrtoinPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPotrtoinPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    PREV
                </button>
            )}
            {pages
                .filter((p) => p >= lefPotrtoinPageNumber && p <= rightPotrtoinPageNumber)
                .map((p) => {
                    return (
                        <span
                            key={p}
                            className={cn({ [styles.selectedPage]: currentPage === p }, styles.pageNubmer)}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            {portionCount > portionNumber && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    NEXT
                </button>
            )}
        </div>
    );
};

export default Paginator;
