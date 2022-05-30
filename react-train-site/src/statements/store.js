import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "1st post",
                    likesCount: "15",
                },
                {
                    id: 2,
                    message: "2nd post",
                    likesCount: "20",
                },
            ],
            newPostText: "kekw",
        },

        dialogsPage: {
            dialogs: [
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
            ],
            messages: [
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
            ],
            newMessageBody: "",
        },
        sidebar: {
            dialogs: [
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
            ],
        },
    },
    _callSubscriber() {
        console.log("qdbp");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
