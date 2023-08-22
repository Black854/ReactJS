import { usersAPI, getUsers } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_LOADING = 'IS_LOADING';
const TOGGLE_FOLLOW_PROGRESS = 'FOLLOW_IN_PROGRESS';

let initialState = {
    usersList: [],
    pageNumber: 1,
    totalCount: 24,
    pageSize: 5,
    isLoading: false,
    followInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u;
                    }
                })
            }
        case SET_USERS: {
            return { ...state, usersList: [...action.users] }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, pageNumber: action.page }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.count }
        }
        case IS_LOADING: {
            return { ...state, isLoading: !state.isLoading }
        }
        case TOGGLE_FOLLOW_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id=> id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const getUsersTC = (pageSize, pageNumber) => {
    return (dispatch) => {
        dispatch(setLoading());
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getUsers(pageSize, pageNumber).then(response => {
            dispatch(setUsers([...response.items]));
            dispatch(setTotalCount(response.totalCount));
            dispatch(setLoading());
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowProgress(true, userId));
        usersAPI.followUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(userId));
                dispatch(setFollowProgress(false, userId));
            }
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowProgress(true, userId));
        usersAPI.unfollowUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
                dispatch(setFollowProgress(false, userId));
            }
        });
    }
}

export const followSuccess = (id) => ({ type: FOLLOW, id })
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id})
export const setUsers = (users) => ({ type: SET_USERS, users})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page})
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count})
export const setLoading = () => ({ type: IS_LOADING})
export const setFollowProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_PROGRESS, isFetching, userId})

export default usersReducer;