import { profileAPI, usersAPI } from "../api/api";

const ADD_POST: string = 'ADD-POST';
const SET_USER_PROFILE: string = 'SET_USER_PROFILE';
const SET_STATUS: string = 'SET_STATUS';
const UPDATE_PHOTO: string = 'UPDATE_PHOTO';

type PostType = {
    id: number
    postText: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, postText: 'Hi bro', likesCount: 1},
        {id: 2, postText: 'How are you?', likesCount: 0},
        {id: 3, postText: 'Bro?', likesCount: 2}
    ] as Array<PostType>,
    profile: null as object | null,
    status: null as string | null
}

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: 10, postText: action.text, likesCount: 0 }
                ]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case UPDATE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const getProfileTC = (userId: number) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response));
        });
    }
}

export const getStatusTC = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response));
}

export const updateStatusTC = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}

export const uploadPhotoTC = (photo: string) => async (dispatch: any) => {
    let response = await profileAPI.uploadPhoto(photo);
    if (response.resultCode === 0) {
        dispatch(updatePhoto(response.data.photos));
    }
}

export const setProfile = (data: any, userId: number) => async (dispatch: any) => {
    let response = await profileAPI.setProfile(data);
    if (response.resultCode === 0) {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response));
        });
    }
}

export const createNewPost = (text: string) => ({ type: ADD_POST, text })
const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile })
const setStatusAC = (status: string) => ({ type: SET_STATUS, status })
const updatePhoto = (photos: string) => ({ type: UPDATE_PHOTO, photos })


export default profileReducer;