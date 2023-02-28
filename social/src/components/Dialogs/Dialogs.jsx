import s from './Dialogs.module.css';
import React from "react";
import Messages from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={props.dialogs} />
            <Messages messages={props.messages} />
        </div>
    );
}

export default Dialogs;