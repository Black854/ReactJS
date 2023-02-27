import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

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

const DialogsData = [
    {id: '1', name: 'Карина'},
    {id: '2', name: 'Сижик'},
    {id: '3', name: 'Арсик'},
    {id: '4', name: 'Систр'},
]

const MessagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'}
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={DialogsData[0].id} name={DialogsData[0].name} />
                <DialogItem id={DialogsData[1].id} name={DialogsData[1].name} />
                <DialogItem id={DialogsData[2].id} name={DialogsData[2].name} />
                <DialogItem id={DialogsData[3].id} name={DialogsData[3].name} />
            </div>
            <div className={s.messages}>
                <Message id={MessagesData[0].id} message={MessagesData[0].message} />
                <Message id={MessagesData[1].id} message={MessagesData[1].message} />
            </div>
        </div>
    );
}

export default Dialogs;