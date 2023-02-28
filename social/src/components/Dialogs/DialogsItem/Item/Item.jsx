import s from './Item.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Item = (props) => {
    return (
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : s.link} to={props.id}>
                <img className={s.userImage} src={props.url} alt=""/>
                <span className={s.name}>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default Item;