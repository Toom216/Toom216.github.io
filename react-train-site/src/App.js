import React from "react";
import "./App.css";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                                element={<ProfileContent store={props.store} />}
                            />
                            <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
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
