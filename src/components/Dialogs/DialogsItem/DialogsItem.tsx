import s from './DialogsItem.module.css';
import React from "react";
import Item from "./Item/Item";

type DialogsType = {
    id: string
    name: string
    url: string
}

type PropsType = {
    dialogs: Array<DialogsType>
}

const DialogsItem:React.FC<PropsType> = ({dialogs}) => {
    let dialogsElements = dialogs.map(dialog => <Item id={dialog.id} key={dialog.id} name={dialog.name} url={dialog.url} />);
    return (
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogsItem;