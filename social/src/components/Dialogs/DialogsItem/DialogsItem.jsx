import s from './DialogsItem.module.css';
import React from "react";
import Item from "./Item/Item";

const DialogsItem = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <Item id={dialog.id} key={dialog.id} name={dialog.name} url={dialog.url}/>);
    return (
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogsItem;