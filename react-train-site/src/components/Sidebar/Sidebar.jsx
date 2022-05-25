import React from "react";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import styles from "./Sidebar.module.css";
import state from "../../statements/state";

const Sidebar = (props) => {
    let dialogsElements = state.sidebar.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    return (
        <div className={styles.text}>
            <h1>Friends</h1>
            <div className={styles.friends}>{dialogsElements}</div>
        </div>
    );
};

export default Sidebar;
