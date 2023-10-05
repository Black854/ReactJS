import { ThunkAction } from "redux-thunk"
import { getAuthDataTC } from "./auth-reducer"
import { AppStateType } from "./store"

const INITIALIZE_APP = 'INITIALIZE_APP';

type initializeAppActionType = {
    type: typeof INITIALIZE_APP
}

let initialState = {    
    initialized: false,
    authorizedUserId: null as number | null
}

type initialStateType = typeof initialState

const appReducer = (state = initialState, action: initializeAppActionType): initialStateType => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeAppTC = ():ThunkType => (dispatch) => {
    let promise = dispatch(getAuthDataTC())
    Promise.all([promise]).then(() => {
        dispatch(initializeApp())
    })
}

type ThunkType = ThunkAction<void, AppStateType, unknown, initializeAppActionType>

const initializeApp = (): initializeAppActionType => ({ type: INITIALIZE_APP })

export default appReducer