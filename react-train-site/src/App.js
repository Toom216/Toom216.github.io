import React, { Component, Suspense } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/ProfileContent/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./statements/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/ProfileContent/ProfileContainer"));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="main">
                <div className="wrapper">
                    <HeaderContainer />
                    <Nav />
                    <div className="main-content-wrapper">
                        <Routes>
                            <Route
                                path="/dialogs/*"
                                element={
                                    <Suspense fallback={<div>Загрузка...</div>}>
                                        <DialogsContainer />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/profile/:userId?"
                                element={
                                    <Suspense fallback={<div>Загрузка...</div>}>
                                        <ProfileContainer />
                                    </Suspense>
                                }
                            />
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
