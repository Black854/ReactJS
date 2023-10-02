import { authAPI, usersAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const DELETE_USER_AUTH_DATA: string = 'DELETE_USER_AUTH_DATA';
const SET_USER_AUTH_DATA: string = 'SET_USER_AUTH_DATA';
const SET_USER_PHOTO: string = 'SET_USER_PHOTO';

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    userPhotoSmall: string | null
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userPhotoSmall: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case DELETE_USER_AUTH_DATA:
            return initialState;
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhotoSmall: action.photo
            }
        default:
            return state;
    }
}

export const getAuthDataTC = () => async (dispatch: any) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserAuthData(id, email, login));
        let response2 = await usersAPI.getProfile(response.data.id);
        dispatch(setUserPhoto(response2.photos.small));
    }
    return response;
}

export const login = (formData: DataType) => async (dispatch: any) => {
    const response = await authAPI.login(formData);
    if (response.resultCode === 0) {            
        const response2 = await authAPI.me();
        if (response2.resultCode === 0) {
            let {id, email, login} = response2.data;
            dispatch(setUserAuthData(id, email, login));
            const response3 = await usersAPI.getProfile(response2.data.id);
            dispatch(setUserPhoto(response3.photos.small));
        }
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(deleteUserAuthData());
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

type setUserPhotoType = {
    type: typeof SET_USER_PHOTO
    photo: string
}

const setUserAuthData = (id: number, email: string, login: string): setUserAuthDataType => ({ type: SET_USER_AUTH_DATA, data: {id, email, login} })
const deleteUserAuthData = (): deleteUserAuthDataType => ({ type: DELETE_USER_AUTH_DATA })
const setUserPhoto = (photo: string): setUserPhotoType => ({ type: SET_USER_PHOTO, photo })

export default authReducer;