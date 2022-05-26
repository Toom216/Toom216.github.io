import state, { subscribe } from "./statements/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText, updateNewMessageText } from "./statements/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>
    );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
