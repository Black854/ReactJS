import {createSelector} from "reselect"
import { AppStateType } from "./store"

const usersList = (state: AppStateType) => {
    return state.usersPage.usersList
}

export const getUsersList = createSelector(usersList, (users) => {
    return users
})

export const getPageNumber = (state: AppStateType) => {
    return state.usersPage.pageNumber
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getIsLoading = (state: AppStateType) => {
    return state.usersPage.isLoading
}

export const getFollowInProgress = (state: AppStateType) => {
    return state.usersPage.followInProgress
}

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}