import s from './Dialogs.module.css';
import React from "react";
import Messages from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesContainer from './Message/MessageContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={props.store.getState().dialogsPage.dialogs} />
            <MessagesContainer store={props.store} />
        </div>
    );
}

export default Dialogs;