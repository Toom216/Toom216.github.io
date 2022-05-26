let rerenderEntireTree = () => {
    console.log("qdbp");
};

let state = {
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
        newMessageText: "ya me te kudasai",
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
};
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.newPostText = "";
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.newMessageText = "";
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
