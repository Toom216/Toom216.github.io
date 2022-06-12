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
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, { id: 4, message: body }],
        };
    }
    return state;
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
