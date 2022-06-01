import styles from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <nav>
                <div className={styles.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/users">Users</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
