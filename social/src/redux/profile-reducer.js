import { getProfile } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, postText: 'Hi bro', likesCount: 1},
        {id: 2, postText: 'How are you?', likesCount: 0},
        {id: 3, postText: 'Bro?', likesCount: 2}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: 10, postText: state.newPostText, likesCount: 0 }
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const getProfileTC = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(response => {
            dispatch(setUserProfile(response));
        });
    }
}

export const createNewPost = () => ({ type: ADD_POST })
export const updateArea = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;