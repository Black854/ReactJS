import Messages from "./Message"
import { connect } from 'react-redux'
import { AppStateType } from "../../../redux/store"
import { dialogsActions } from "../../../redux/dialogs-reducer"


let mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.messages
    }
}

const MessagesContainer = connect(mapStateToProps, {sendMessage: dialogsActions.sendMessage}) (Messages)

export default MessagesContainer