import { usersAPI } from "../api/api";

const FOLLOW: string = 'FOLLOW';
const UNFOLLOW: string = 'UNFOLLOW';
const SET_USERS: string = 'SET-USERS';
const SET_CURRENT_PAGE: string = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT: string = 'SET_TOTAL_COUNT';
const IS_LOADING: string = 'IS_LOADING';
const TOGGLE_FOLLOW_PROGRESS: string = 'FOLLOW_IN_PROGRESS';

let initialState = {
    usersList: [] as any,
    pageNumber: 1 as number,
    totalCount: 24 as number,
    pageSize: 5 as number,
    isLoading: false as boolean,
    followInProgress: []
}

type usersListU = {
    id: number
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

export const getUsersTC = (pageSize: number, pageNumber: number) =>  async (dispatch: any) => {
    dispatch(setLoading());
    dispatch(setCurrentPage(pageNumber));
    let response = await usersAPI.getUsers(pageSize, pageNumber);
    dispatch(setUsers([...response.items]));
    dispatch(setTotalCount(response.totalCount));
    dispatch(setLoading());
}

export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(setFollowProgress(true, userId));
    let response = await usersAPI.followUser(userId);
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(setFollowProgress(false, userId));
    }
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(setFollowProgress(true, userId));
    let response = await usersAPI.unfollowUser(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
        dispatch(setFollowProgress(false, userId));
    }
}

export const followSuccess = (id: number) => ({ type: FOLLOW, id })
export const unfollowSuccess = (id: number) => ({ type: UNFOLLOW, id})
export const setUsers = (users: any) => ({ type: SET_USERS, users})
export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page})
export const setTotalCount = (count: number) => ({ type: SET_TOTAL_COUNT, count})
export const setLoading = () => ({ type: IS_LOADING})
export const setFollowProgress = (isFetching: boolean, userId: number) => ({ type: TOGGLE_FOLLOW_PROGRESS, isFetching, userId})

export default usersReducer;