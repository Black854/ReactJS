const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newMessageText,
            senderId: 1
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text;
    }
    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

export default dialogsReducer;