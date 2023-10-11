import { AppStateType } from "./store"

export const getEmail = (state: AppStateType) => {
    return state.auth.email
}

export const getPageNumber = (state: AppStateType) => {
    return state.auth.error
}

export const getId = (state: AppStateType) => {
    return state.auth.id
}

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getLogin = (state: AppStateType) => {
    return state.auth.login
}

export const getUserPhotoSmall = (state: AppStateType) => {
    return state.auth.userPhotoSmall
}