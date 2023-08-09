import React from "react";
import Messages from "./Message";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';

const MessagesContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let updateText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Messages sendMessage={sendMessage} updateText={updateText} messages={state.messages} newMessageText={state.newMessageText}  />
    );
}

export default MessagesContainer;