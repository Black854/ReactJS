import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersList: [
        {id: 1, fullName: 'Сижик', status: 'I am boss', location: {city: 'krg', country: 'kz'}, followed: false, avatar: sizh},
        {id: 2, fullName: 'Арсик', status: 'I am boss too', location: {city: 'krg', country: 'kz'}, followed: true, avatar: ars},
        {id: 3, fullName: 'Систр', status: 'I am boss too', location: {city: 'krg', country: 'kz'}, followed: false, avatar: sistr}
    ]
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
        case SET_USERS:
            return {
                ...state,
                usersList: [...state.usersList, ...action.users]
            }    
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id})
export const setUsersAC = (users) => ({ type: SET_USERS, users})

export default usersReducer;