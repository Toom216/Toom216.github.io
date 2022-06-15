import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfileContent/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./statements/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <BrowserRouter>
                <div className="main">
                    <div className="wrapper">
                        <HeaderContainer />
                        <Nav />
                        <div className="main-content-wrapper">
                            <Routes>
                                <Route path="/dialogs/*" element={<DialogsContainer />} />
                                <Route path="/profile/userId?" element={<ProfileContainer />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/music" element={<Music />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/users" element={<UsersContainer />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
