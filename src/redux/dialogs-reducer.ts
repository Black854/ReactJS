import karina from '../img/karina.jpg'
import ars from '../img/ars.jpg'
import sizh from '../img/sizh.jpg'
import sistr from '../img/sistr.jpg'
import { AppStateType, InferActionsTypes } from './store'
import { ThunkAction } from 'redux-thunk'

type DialogType = {
    id: number
    name: string
    url: string
}

type MessageType = {
    id: number
    message: string
    senderId: number
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Карина', url: karina },
        { id: 2, name: 'Сижик', url: sizh },
        { id: 3, name: 'Арсик', url: ars },
        { id: 12, name: 'Систр', url: sistr },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi', senderId: 1 },
        { id: 2, message: 'HellooHellooHellooHellooHellooHellooHellooHellooHellooHellooHellooHelloo', senderId: 25138 },
        { id: 3, message: 'How are you?', senderId: 1 },
        { id: 4, message: 'Helloo', senderId: 1 }
    ] as Array<MessageType>
}

type InitialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'sn/dialogs/SEND_MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    { id: 5, message: action.text, senderId: 1 }
                ]
            }
        default:
            return state
    }
}

type ActionTypes = InferActionsTypes<typeof dialogsActions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const dialogsActions = {
    sendMessage: (text: string) => ({ type: 'sn/dialogs/SEND_MESSAGE', text } as const)
}

export default dialogsReducer