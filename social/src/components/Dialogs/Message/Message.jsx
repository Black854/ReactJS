import s from './Message.module.css';
import React from "react";

const Message = (props) => {
    return <div>{props.message}</div>
}

const Messages = (props) => {
    let messagesElements = props.messages.map(message => <Message id={message.id} message={message.message} />);
    return (
        <div className={s.messages}>
            {messagesElements}
        </div>
    );
}

export default Messages;