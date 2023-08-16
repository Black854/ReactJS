const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    usersList: [],
    pageNumber: 1,
    totalCount: 24,
    pageSize: 5,
    isLoading: false
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
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.count }
        }
        case IS_LOADING: {
            return { ...state, isLoading: !state.isLoading }
        }
        default:
            return state;
    }
}

export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({ type: UNFOLLOW, id})
export const setUsers = (users) => ({ type: SET_USERS, users})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page})
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count})
export const setLoading = () => ({ type: IS_LOADING})

export default usersReducer;