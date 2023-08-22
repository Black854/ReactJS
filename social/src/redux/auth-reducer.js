import { authAPI, usersAPI } from "../api/api";

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
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhotoSmall: action.photo
            }
        default:
            return state;
    }
}

export const getAuthDataTC = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setUserAuthData(id, email, login));
                usersAPI.getProfile(response.data.id).then(response2 => {
                    dispatch(setUserPhoto(response2.photos.small));
                })
            }
        });
    }
}

const setUserAuthData = (id, email, login) => ({ type: SET_USER_AUTH_DATA, data: {id, email, login} })
const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

export default authReducer;