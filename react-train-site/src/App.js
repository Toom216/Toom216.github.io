import React from "react";
import "./App.css";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
    return (
        <div className="main">
            <div className="wrapper">
                <Header />
                <Nav />
                <ProfileContent />
            </div>
        </div>
    );
};

export default App;
