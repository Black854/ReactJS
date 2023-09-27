import s from './Message.module.css';
import React from "react";
import Item from "./Item/Item";
import { reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormControls';
import { maxLength } from '../../../utils/validators/validators';
import { CreateField } from '../../common/FormsControls/form-helpers';

const NewMessageForm = ({handleSubmit, reset}) => {
    return (
        <form onSubmit={handleSubmit} reset={true}>
            {CreateField("text", Textarea, [ maxLength ], { className: s.newMessageText })}
            <button className={s.sendButton}>Send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessageForm);

const Messages = ({sendMessage, messages}) => {
    let messagesElements = messages.map(message => <Item key={message.id} message={message.message} senderId={message.senderId} />);

    let sendMessageText = (values) => {
        debugger
        sendMessage(values.text);
    }

    return (
        <div className={s.messages}>
            {messagesElements}
            <NewMessageReduxForm onSubmit={sendMessageText} />
        </div>
    );
}

export default Messages;