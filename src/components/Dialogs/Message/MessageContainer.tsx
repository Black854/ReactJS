import Messages from "./Message";
import { sendMessage } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { AppStateType } from "../../../redux/store";

let mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.messages
    }
}

const MessagesContainer = connect(mapStateToProps, {sendMessage}) (Messages);

export default MessagesContainer;