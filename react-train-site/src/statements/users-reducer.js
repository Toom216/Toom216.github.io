import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWIG_PROGRESS = "TOGGLE_IS_FOLLOWIG_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
            };

        case SET_USERS:
            return { ...state, users: action.users };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWIG_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id != action.userId),
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWIG_PROGRESS, isFetching, userId });

export const getUsers = (page, pageSize) => {
    return async (dispath) => {
        dispath(toggleIsFetching(true));
        dispath(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);
        dispath(toggleIsFetching(false));
        dispath(setUsers(data.items));
        dispath(setTotalUsersCount(data.totalCount));
    };
};

const followUnfollowFlow = async (dispath, userId, apiMethod, actionCreator) => {
    dispath(toggleFollowingProgress(true, userId));

    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispath(actionCreator(userId));
    }
    dispath(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
    return async (dispath) => {
        followUnfollowFlow(dispath, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    };
};
export const unfollow = (userId) => {
    return async (dispath) => {
        followUnfollowFlow(dispath, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    };
};

export default usersReducer;
