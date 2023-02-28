import s from './Item.module.css';
import React from "react";

const Item = (props) => {
    return <div className={props.senderId === '1' ? s.myItem : s.otherItem}>{props.message}</div>
}

export default Item;