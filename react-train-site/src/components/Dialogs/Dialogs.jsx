import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
    let dialogsData = [
        {
            id: 1,
            name: "Vasya",
        },
        {
            id: 2,
            name: "Harold",
        },
        {
            id: 3,
            name: "Nenet",
        },
        {
            id: 4,
            name: "Lycan",
        },
        {
            id: 5,
            name: "Isagava",
        },
    ];
    let messagesData = [
        {
            id: 1,
            message: "sun is very bright today",
        },
        {
            id: 2,
            message: "hope coming to me",
        },
        {
            id: 3,
            message: "i really want mountain of money",
        },
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};

export default Dialogs;
