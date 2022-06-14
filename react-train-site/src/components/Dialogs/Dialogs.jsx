import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, reqired } from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    // if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody" component="textarea" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
