import styles from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" />
            <div className={styles.loginBlock}>{props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}</div>
        </header>
    );
};

export default Header;
