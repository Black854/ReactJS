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

export const setUserAuthData = (id, email, login) => ({ type: SET_USER_AUTH_DATA, data: {id, email, login} })
export const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

export default authReducer;