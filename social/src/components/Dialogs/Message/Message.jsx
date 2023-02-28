import s from './Message.module.css';
import React from "react";
import Item from "./Item/Item";


const Messages = (props) => {
    let messagesElements = props.messages.map(message => <Item id={message.id} message={message.message} senderId={message.senderId} />);
    return (
        <div className={s.messages}>
            {messagesElements}
        </div>
    );
}

export default Messages;