import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const DialogsData = [
    {id: '1', name: 'Карина'},
    {id: '2', name: 'Сижик'},
    {id: '3', name: 'Арсик'},
    {id: '4', name: 'Систр'},
]

const MessagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Helloo'}
]

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div>{props.message}</div>
}

let dialogsElements = DialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} /> );
let messagesElements = MessagesData.map(message=> <Message id={message.id} message={message.message} />);

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;