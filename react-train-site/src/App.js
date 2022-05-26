import React from "react";
import "./App.css";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main">
                <div className="wrapper">
                    <Header />
                    <Nav />
                    <div className="main-content-wrapper">
                        <Routes>
                            <Route
                                path="/profile"
                                element={
                                    <ProfileContent
                                        profilePage={props.state.profilePage}
                                        addPost={props.addPost}
                                        updateNewPostText={props.updateNewPostText}
                                    />
                                }
                            />
                            <Route
                                path="/dialogs/*"
                                element={
                                    <Dialogs
                                        state={props.state.dialogsPage}
                                        dialogsPage={props.state.dialogsPage}
                                        addMessage={props.addMessage}
                                        updateNewMessageText={props.updateNewMessageText}
                                    />
                                }
                            />
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
