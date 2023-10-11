import { ThunkAction } from 'redux-thunk'
import { ResultCodesEnum, authAPI, usersAPI } from '../api/api'
import { AppStateType, InferActionsTypes } from './store'
import { Dispatch } from 'redux'

let initialState = {
    id: null as number| null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    userPhotoSmall: null as string | null,
    error: null as string | null
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'sn/auth/SET_USER_AUTH_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'sn/auth/DELETE_USER_AUTH_DATA':
            return initialState;
        case 'sn/auth/SET_USER_PHOTO':
            return {
                ...state,
                userPhotoSmall: action.photo
            }
        case 'sn/auth/SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const getAuthDataTC = (): ThunkType => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data
        dispatch(authActions.setUserAuthData(id, email, login))
        let response2 = await usersAPI.getProfile(response.data.id)
        dispatch(authActions.setUserPhoto(response2.photos.small))
    }
    return response
}

export const login = (formData: {email: string, password: string, rememberMe: boolean}): ThunkType => async (dispatch) => {
    const response = await authAPI.login(formData)
    if (response.resultCode === ResultCodesEnum.Success) {            
        const response2 = await authAPI.me()
        if (response2.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = response2.data
            dispatch(authActions.setUserAuthData(id, email, login))
            const response3 = await usersAPI.getProfile(response2.data.id)
            dispatch(authActions.setUserPhoto(response3.photos.small))
            dispatch(authActions.setError(null))
        }
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "some error"
        dispatch(authActions.setError(message))
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(authActions.deleteUserAuthData())
    }
}

type ActionTypes = InferActionsTypes<typeof authActions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const authActions = {
    setUserAuthData: (id: number, email: string, login: string) => ({ type: 'sn/auth/SET_USER_AUTH_DATA', data: {id, email, login} } as const),
    deleteUserAuthData: () => ({ type: 'sn/auth/DELETE_USER_AUTH_DATA' } as const),
    setUserPhoto: (photo: string | null) => ({ type: 'sn/auth/SET_USER_PHOTO', photo } as const),
    setError: (error: string | null) => ({ type: 'sn/auth/SET_ERROR', error } as const)
}

export default authReducer