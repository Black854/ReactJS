import s from './Dialogs.module.css';
import React from "react";
import Messages from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={props.dialogsPage.dialogs} />
            <Messages newMessageText={ props.dialogsPage.newMessageText } messages={props.dialogsPage.messages} dispatch={props.dispatch} />
        </div>
    );
}

export default Dialogs;