import { reset } from 'redux-form'
import { ResultCodesEnum, profileAPI, usersAPI } from '../api/api'
import { PhotosType, PostType, ProfileType } from '../types/types'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './store'
import { setUserPhoto, setUserPhotoType } from './auth-reducer'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_PHOTO = 'UPDATE_PHOTO'

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
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: 10, postText: action.text, likesCount: 0 }
                ]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_PHOTO:
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
    dispatch(setUserProfile(response))
}

export const getStatusTC = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response))
}

export const updateStatusTC = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatusAC(status))
    }
}

export const uploadPhotoTC = (photo: any): ThunkType => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(photo)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(updatePhoto(response.data.photos))
        dispatch(setUserPhoto(response.data.photos.small))
    }
}

export const setProfile = (data: ProfileType, userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.setProfile(data)
    if (response.resultCode === ResultCodesEnum.Success) {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        });
    }
}

export const resetForm = (formName: string) => (dispatch: any) => {
    dispatch(reset(formName))
}

type CreateNewPostType = {
    type: typeof ADD_POST
    text: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetStatusACType = {
    type: typeof SET_STATUS
    status: string
}

type UpdatePhotoType = {
    type: typeof UPDATE_PHOTO
    photos: PhotosType
}

type ActionTypes = CreateNewPostType | SetUserProfileType | SetStatusACType | UpdatePhotoType | setUserPhotoType
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>
 
export const createNewPost = (text: string): CreateNewPostType => ({ type: ADD_POST, text })
const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
const setStatusAC = (status: string): SetStatusACType => ({ type: SET_STATUS, status })
const updatePhoto = (photos: PhotosType): UpdatePhotoType => ({ type: UPDATE_PHOTO, photos })

export default profileReducer