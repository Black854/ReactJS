import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, postText: 'Hi bro', likesCount: 1},
        {id: 2, postText: 'How are you?', likesCount: 0},
        {id: 3, postText: 'Bro?', likesCount: 2}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const getProfileTC = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response));
        });
    }
}

export const getStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response));
        });
    }
}

export const updateStatusTC = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatusAC(status));
        }
    });
}

export const createNewPost = (text) => ({ type: ADD_POST, text })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatusAC = (status) => ({ type: SET_STATUS, status })

export default profileReducer;