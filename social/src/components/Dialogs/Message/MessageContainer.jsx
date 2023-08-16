import Messages from "./Message";
import { sendMessage, updateText } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const MessagesContainer = connect(mapStateToProps, {sendMessage, updateText}) (Messages);

export default MessagesContainer;