import s from './Message.module.css';
import React from "react";
import Item from "./Item/Item";


const Messages = (props) => {
    let messagesElements = props.messages.map(message => <Item key={message.id} message={message.message} senderId={message.senderId} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let updateText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.messages}>
            {messagesElements}
            <textarea onChange={ updateText } ref={newMessageElement} className={s.newMessageText} value={props.newMessageText} />
            <button onClick={ sendMessage } className={s.sendButton}> Send </button>
        </div>
    );
}

export default Messages;