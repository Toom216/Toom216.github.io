import styles from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

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
            </nav>
            <Sidebar/>
        </div>
    );
};

export default Nav;
