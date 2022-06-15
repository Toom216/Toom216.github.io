import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(getAuthUserData(id, email, login, true));
        }
    });
};
export const login = (emial, password, rememberMe) => (dispatch) => {
    authAPI.login(emial, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages.length[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
