import { ThunkAction } from 'redux-thunk'
import { ResultCodesEnum, authAPI, usersAPI } from '../api/api'
import {stopSubmit} from 'redux-form'
import { AppStateType } from './store'

const DELETE_USER_AUTH_DATA = 'DELETE_USER_AUTH_DATA'
const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

let initialState = {
    id: null as number| null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    userPhotoSmall: null as string | null
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case DELETE_USER_AUTH_DATA:
            return initialState;
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhotoSmall: action.photo
            }
        default:
            return state
    }
}

export const getAuthDataTC = (): ThunkType => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data
        dispatch(setUserAuthData(id, email, login))
        let response2 = await usersAPI.getProfile(response.data.id)
        dispatch(setUserPhoto(response2.photos.small))
    }
    return response
}

export const login = (formData: {email: string, password: string, rememberMe: boolean}): ThunkType => async (dispatch) => {
    const response = await authAPI.login(formData)
    if (response.resultCode === ResultCodesEnum.Success) {            
        const response2 = await authAPI.me()
        if (response2.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = response2.data
            dispatch(setUserAuthData(id, email, login))
            const response3 = await usersAPI.getProfile(response2.data.id)
            dispatch(setUserPhoto(response3.photos.small))
        }
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(deleteUserAuthData())
    }
}

type DataType = {
    id: number
    email: string
    login: string
}

type setUserAuthDataType = {
    type: typeof SET_USER_AUTH_DATA,
    data: DataType
}

type deleteUserAuthDataType = {
    type: typeof DELETE_USER_AUTH_DATA
}

export type setUserPhotoType = {
    type: typeof SET_USER_PHOTO
    photo: string | null
}

type ActionTypes = setUserAuthDataType | deleteUserAuthDataType | setUserPhotoType
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

const setUserAuthData = (id: number, email: string, login: string): setUserAuthDataType => ({ type: SET_USER_AUTH_DATA, data: {id, email, login} })
const deleteUserAuthData = (): deleteUserAuthDataType => ({ type: DELETE_USER_AUTH_DATA })
export const setUserPhoto = (photo: string | null): setUserPhotoType => ({ type: SET_USER_PHOTO, photo })

export default authReducer