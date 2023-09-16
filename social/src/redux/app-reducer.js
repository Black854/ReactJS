import { getAuthDataTC } from "./auth-reducer";

const INITIALIZE_APP = 'INITIALIZE_APP';

let initialState = {
    initialized: false,
    authorizedUserId: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeAppTC = () => (dispatch) => {
    let promise = dispatch(getAuthDataTC());
    Promise.all([promise]).then(() => {
        dispatch(initializeApp());
    })
}

const initializeApp = () => ({ type: INITIALIZE_APP })

export default appReducer;