import { authAPI, usersAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const DELETE_USER_AUTH_DATA = 'DELETE_USER_AUTH_DATA';
const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userPhotoSmall: null
}

const authReducer = (state = initialState, action) => {
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

export const getAuthDataTC = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserAuthData(id, email, login));
        let response2 = await usersAPI.getProfile(response.data.id);
        dispatch(setUserPhoto(response2.photos.small));
    }
    return response;
}

export const login = (formData) => async (dispatch) => {
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

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(deleteUserAuthData());
    }
    
}

const setUserAuthData = (id, email, login) => ({ type: SET_USER_AUTH_DATA, data: {id, email, login} })
const deleteUserAuthData = () => ({ type: DELETE_USER_AUTH_DATA })
const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

export default authReducer;