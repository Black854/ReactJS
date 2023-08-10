import karina from "../img/karina.jpg";
import ars from "../img/ars.jpg";
import sizh from "../img/sizh.jpg";
import sistr from "../img/sistr.jpg";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: '1', name: 'Карина', url: karina },
        { id: '2', name: 'Сижик', url: sizh },
        { id: '3', name: 'Арсик', url: ars },
        { id: '4', name: 'Систр', url : sistr },
    ],
    messages: [
        { id: 1, message: 'Hi', senderId: 1 },
        { id: 2, message: 'Helloo', senderId: 2 },
        { id: 3, message: 'How are you?', senderId: 1 },
        { id: 4, message: 'Helloo', senderId: 1 }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    { id: 5, message: state.newMessageText, senderId: 1 }
                ],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

export default dialogsReducer;