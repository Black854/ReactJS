import s from './Message.module.css';
import React from "react";
import Item from "./Item/Item";
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormControls';
import { maxLength, required } from '../../../utils/validators/validators';

const NewMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className={s.newMessageText} name='text' component={Textarea} validate={[required, maxLength(50)]}/>
            <button className={s.sendButton}>Send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessageForm);

const Messages = ({sendMessage, messages}) => {
    let messagesElements = messages.map(message => <Item key={message.id} message={message.message} senderId={message.senderId} />);

    let sendMessageText = (values) => {
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