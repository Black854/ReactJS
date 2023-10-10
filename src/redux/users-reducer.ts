import { ThunkAction } from "redux-thunk"
import { ResultCodesEnum, usersAPI } from "../api/api"
import { UserType } from "../types/types"
import { AppStateType, InferActionsTypes } from "./store"

let initialState = {
    usersList: [] as Array<UserType>,
    pageNumber: 1,
    totalCount: 1,
    pageSize: 5,
    isLoading: false as boolean,
    followInProgress: [] as Array<number> //массив пользовательских ID
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'sn/users/FOLLOW':
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
        case 'sn/users/UNFOLLOW':
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u
                    }
                })
        }
        case 'sn/users/SET_USERS': {
            return { ...state, usersList: [...action.users] }
        }
        case 'sn/users/SET_CURRENT_PAGE': {
            return { ...state, pageNumber: action.page }
        }
        case 'sn/users/SET_TOTAL_COUNT': {
            return { ...state, totalCount: action.count }
        }
        case 'sn/users/IS_LOADING': {
            return { ...state, isLoading: !state.isLoading }
        }
        case 'sn/users/TOGGLE_FOLLOW_PROGRESS': {
            return {
                ...state,
                followInProgress: action.isFetching
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id=> id !== action.userId)
            }
        }
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getUsersTC = (pageSize: number, pageNumber: number): ThunkType =>  async (dispatch) => {
    dispatch(usersActions.setLoading())
    dispatch(usersActions.setCurrentPage(pageNumber))
    let response = await usersAPI.getUsers(pageSize, pageNumber)
    dispatch(usersActions.setUsers([...response.items]))
    dispatch(usersActions.setTotalCount(response.totalCount))
    dispatch(usersActions.setLoading())
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.setFollowProgress(true, userId))
    let response = await usersAPI.followUser(userId)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(usersActions.followSuccess(userId))
        dispatch(usersActions.setFollowProgress(false, userId))
    }
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.setFollowProgress(true, userId))
    let response = await usersAPI.unfollowUser(userId)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(usersActions.unfollowSuccess(userId))
        dispatch(usersActions.setFollowProgress(false, userId))
    }
}

type ActionTypes = InferActionsTypes<typeof usersActions>

const usersActions = {
    followSuccess: (id: number) => ({ type: 'sn/users/FOLLOW', id } as const),
    unfollowSuccess: (id: number) => ({ type: 'sn/users/UNFOLLOW', id} as const),
    setUsers: (users: Array<UserType>) => ({ type: 'sn/users/SET_USERS', users} as const),
    setCurrentPage: (page: number) => ({ type: 'sn/users/SET_CURRENT_PAGE', page} as const),
    setTotalCount: (count: number) => ({ type: 'sn/users/SET_TOTAL_COUNT', count} as const),
    setLoading: () => ({ type: 'sn/users/IS_LOADING'} as const),
    setFollowProgress: (isFetching: boolean, userId: number) => ({ type: 'sn/users/TOGGLE_FOLLOW_PROGRESS', isFetching, userId} as const)
}

export default usersReducer