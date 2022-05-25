import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>
                <img src="https://oir.mobi/uploads/posts/2021-05/1621430508_15-oir_mobi-p-kaban-v-dikoi-prirode-zhivotnie-krasivo-fo-17.jpg" />
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
