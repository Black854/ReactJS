import s from './Message.module.css';
import React from "react";
import Item from "./Item/Item";


const Messages = (props) => {
    let messagesElements = props.messages.map(message => <Item id={message.id} message={message.message} senderId={message.senderId} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);
        newMessageElement.current.value = '';
    }

    return (
        <div className={s.messages}>
            {messagesElements}
            <textarea ref={newMessageElement} className={s.newMessageText} />
            <button onClick={ sendMessage } className={s.sendButton}> Send </button>
        </div>
    );
}

export default Messages;