import Messages from "./Message";
import { sendMessage } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { AppStateType } from "../../../redux/store";
import { resetForm } from '../../../redux/profile-reducer';


let mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.messages
    }
}



const MessagesContainer = connect(mapStateToProps, {sendMessage, resetForm}) (Messages);

export default MessagesContainer;