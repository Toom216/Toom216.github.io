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

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <div className="wrapper">
                    <Header />
                    <Nav />
                    <div className="main-content-wrapper">
                        <Routes>
                            <Route path="/profile" element={<ProfileContent />} />
                            <Route path="/dialogs/*" element={<Dialogs />} />
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
