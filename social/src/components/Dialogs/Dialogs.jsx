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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Карина'/>
                <DialogItem id='2' name='Сижик'/>
                <DialogItem id='3' name='Арсик'/>
                <DialogItem id='4' name='Систр'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>
    );
}

export default Dialogs;