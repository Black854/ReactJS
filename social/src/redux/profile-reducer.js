const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, postText: 'Hi bro', likesCount: 1},
        {id: 2, postText: 'How are you?', likesCount: 0},
        {id: 3, postText: 'Bro?', likesCount: 2}
    ],
    newPostText: ''
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })

export default profileReducer;