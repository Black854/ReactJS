import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    usersList: [
        {id: 1, fullName: 'Сижик', status: 'I am boss', location: {city: 'krg', country: 'kz'}, followed: false, avatar: sizh},
        {id: 2, fullName: 'Арсик', status: 'I am boss too', location: {city: 'krg', country: 'kz'}, followed: false, avatar: ars},
        {id: 3, fullName: 'Систр', status: 'I am boss too', location: {city: 'krg', country: 'kz'}, followed: false, avatar: sistr},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
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
            }    
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW, iserId: id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, iserId: id})

export default usersReducer;