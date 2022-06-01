const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        };
        return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return { ...state, newPostText: action.newText };
    }

    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
