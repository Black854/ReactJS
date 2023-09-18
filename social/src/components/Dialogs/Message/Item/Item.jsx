import s from './Item.module.css';
import React from "react";

const Item = ({senderId, message}) => {
    return <div className={senderId === 1 ? s.myItem : s.otherItem}>{message}</div>
}

export default Item;