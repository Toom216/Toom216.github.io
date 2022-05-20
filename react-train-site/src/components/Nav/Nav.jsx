import styles from "./Nav.module.css";
import React from "react";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <nav>
                <div className={`${styles.item} ${styles.item__active}`}>Profile</div>
                <div className={styles.item}>Messages</div>
                <div className={styles.item}>News</div>
                <div className={styles.item}>Music</div>
                <div className={styles.item}>Setting</div>
            </nav>
        </div>
    );
};

export default Nav;
