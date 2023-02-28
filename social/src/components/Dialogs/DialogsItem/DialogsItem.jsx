import s from './DialogsItem.module.css';
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    );
}

const DialogsItem = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    return (
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogsItem;