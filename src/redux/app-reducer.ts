import { ThunkAction } from "redux-thunk"
import { getAuthDataTC } from "./auth-reducer"
import { AppStateType, InferActionsTypes } from "./store"

let initialState = {    
    initialized: false,
    authorizedUserId: null as number | null
}

type initialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'sn/app/INITIALIZE_APP':
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
        dispatch(appActions.initializeApp())
    })
}

type ActionTypes = InferActionsTypes<typeof appActions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

const appActions = {
    initializeApp: () => ({ type: 'sn/app/INITIALIZE_APP' } as const)
}


export default appReducer