import { getAuthDataTC } from "./auth-reducer";

const INITIALIZE_APP: string = 'INITIALIZE_APP';

type initialStateType = {
    initialized: boolean
    authorizedUserId: number | null
}

type initializeAppActionType = {
    type: typeof INITIALIZE_APP
}

let initialState: initialStateType = {    
    initialized: false,
    authorizedUserId: null
}

const appReducer = (state: initialStateType = initialState, action: initializeAppActionType): initialStateType => {
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

const initializeApp = (): initializeAppActionType => ({ type: INITIALIZE_APP })

export default appReducer;  