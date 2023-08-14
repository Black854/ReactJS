const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    usersList: [],
    pageNumber: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u;
                    }
                })
            }
        case SET_USERS: {
            return { ...state, usersList: [...action.users] }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, pageNumber: action.page }
        }
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id})
export const setUsersAC = (users) => ({ type: SET_USERS, users})
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page})

export default usersReducer;