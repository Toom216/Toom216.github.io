const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({
            id: 4,
            message: body,
        });
    }

    return state;
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
