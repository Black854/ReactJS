import s from './Message.module.css';
import React from "react";
import Item from "./Item/Item";
import { reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormControls';
import { maxLength } from '../../../utils/validators/validators';
import { CreateField } from '../../common/FormsControls/form-helpers';
import { resetForm } from '../../../redux/profile-reducer';

type NewMessagePropsType = {
    handleSubmit: any
}

const NewMessageForm: React.FC<NewMessagePropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("text", Textarea, [ maxLength ], { className: s.newMessageText }, null, null)}
            <button className={s.sendButton}>Send</button>
        </form>
    )
}

type PropsType = {
    sendMessage: (text: string) => void
    resetForm: (formName: string) => void
    messages: Array<MessagesType>
}

type MessagesType = {
    id: number
    message: string
    senderId: number
}


const Messages: React.FC<PropsType> = ({sendMessage, messages, resetForm}) => {
    const formName = 'newMessageForm';
    const NewMessageReduxForm = reduxForm({form: formName, onSubmitSuccess: () => { resetForm(formName) }})(NewMessageForm);

    let messagesElements = messages.map(message => <Item key={message.id} message={message.message} senderId={message.senderId} />);

    let sendMessageText = (values: any) => {
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