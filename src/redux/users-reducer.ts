import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { AppStateType } from "./store";

const FOLLOW: string = 'FOLLOW';
const UNFOLLOW: string = 'UNFOLLOW';
const SET_USERS: string = 'SET-USERS';
const SET_CURRENT_PAGE: string = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT: string = 'SET_TOTAL_COUNT';
const IS_LOADING: string = 'IS_LOADING';
const TOGGLE_FOLLOW_PROGRESS: string = 'FOLLOW_IN_PROGRESS';

let initialState = {
    usersList: [] as Array<UserType>,
    pageNumber: 1,
    totalCount: 1,
    pageSize: 5,
    isLoading: false as boolean,
    followInProgress: [] as Array<number> //массив пользовательских ID
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: AllActionTypes): InitialStateType => {
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
                : state.followInProgress.filter(id=> id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

export const getUsersTC = (pageSize: number, pageNumber: number): ThunkType =>  async (dispatch) => {
    dispatch(setLoading());
    dispatch(setCurrentPage(pageNumber));
    let response = await usersAPI.getUsers(pageSize, pageNumber);
    dispatch(setUsers([...response.items]));
    dispatch(setTotalCount(response.totalCount));
    dispatch(setLoading());
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(setFollowProgress(true, userId));
    let response = await usersAPI.followUser(userId);
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(setFollowProgress(false, userId));
    }
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(setFollowProgress(true, userId));
    let response = await usersAPI.unfollowUser(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
        dispatch(setFollowProgress(false, userId));
    }
}

type followSuccessType = {
    type: typeof FOLLOW
    id: number
}

type unfollowSuccessType = {
    type: typeof UNFOLLOW
    id: number
}

type setUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

type setTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    count: number
}

type setLoadingType = {
    type: typeof IS_LOADING
}

type setFollowProgressType = {
    type: typeof TOGGLE_FOLLOW_PROGRESS
    isFetching: boolean
    userId: number
}

type AllActionTypes = followSuccessType & unfollowSuccessType & setUsersType & setCurrentPageType & setTotalCountType & setLoadingType & setFollowProgressType
type ActionType = followSuccessType | unfollowSuccessType | setUsersType | setCurrentPageType | setTotalCountType | setLoadingType | setFollowProgressType

export const followSuccess = (id: number): followSuccessType => ({ type: FOLLOW, id })
export const unfollowSuccess = (id: number): unfollowSuccessType => ({ type: UNFOLLOW, id})
export const setUsers = (users: Array<UserType>):setUsersType => ({ type: SET_USERS, users})
export const setCurrentPage = (page: number):setCurrentPageType => ({ type: SET_CURRENT_PAGE, page})
export const setTotalCount = (count: number):setTotalCountType => ({ type: SET_TOTAL_COUNT, count})
export const setLoading = ():setLoadingType => ({ type: IS_LOADING})
export const setFollowProgress = (isFetching: boolean, userId: number):setFollowProgressType => ({ type: TOGGLE_FOLLOW_PROGRESS, isFetching, userId})

export default usersReducer;