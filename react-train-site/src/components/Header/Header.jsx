import styles from "./Header.module.css";
import React from "react";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" />
        </header>
    );
};

export default Header;
