import { reset } from 'redux-form'
import { ResultCodesEnum, profileAPI, usersAPI } from '../api/api'
import { PhotosType, PostType, ProfileType } from '../types/types'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from './store'
import { authActions } from './auth-reducer'

let initialState = {
    posts: [
        {id: 1, postText: 'Hi bro', likesCount: 1},
        {id: 2, postText: 'How are you?', likesCount: 0},
        {id: 3, postText: 'Bro?', likesCount: 2}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: null as string | null
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'sn/profile/ADD_POST':
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: 10, postText: action.text, likesCount: 0 }
                ]
            }
        case 'sn/profile/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'sn/profile/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'sn/profile/UPDATE_PHOTO':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

export const getProfileTC = (userId: number): ThunkType => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(profileActions.setUserProfile(response))
}

export const getStatusTC = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(profileActions.setStatusAC(response))
}

export const updateStatusTC = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(profileActions.setStatusAC(status))
    }
}

export const uploadPhotoTC = (photo: any): ThunkType => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(photo)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(profileActions.updatePhoto(response.data.photos))
        dispatch(profileActions.setUserPhoto(response.data.photos.small))
    }
}

export const setProfile = (data: ProfileType, userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.setProfile(data)
    if (response.resultCode === ResultCodesEnum.Success) {
        usersAPI.getProfile(userId).then(response => {
            dispatch(profileActions.setUserProfile(response))
        });
    }
}

type ActionTypes = InferActionsTypes<typeof profileActions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const profileActions = {
    createNewPost: (text: string) => ({ type: 'sn/profile/ADD_POST', text } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'sn/profile/SET_USER_PROFILE', profile } as const),
    setStatusAC: (status: string) => ({ type: 'sn/profile/SET_STATUS', status } as const),
    updatePhoto: (photos: PhotosType) => ({ type: 'sn/profile/UPDATE_PHOTO', photos } as const),
    setUserPhoto: authActions.setUserPhoto
}

export default profileReducer