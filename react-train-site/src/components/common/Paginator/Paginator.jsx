import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; 1 <= pagesCount; i++) {
        pages.push(i);
        if (i == 30) break;
    }

    return (
        <div className={styles.pagesCount}>
            {pages.map((p) => {
                return (
                    <span
                        key={p.id}
                        className={currentPage == p && styles.selectedPage}
                        onClick={() => {
                            onPageChanged(p);
                        }}
                    >
                        {p}
                    </span>
                );
            })}
        </div>
    );
};

export default Paginator;
