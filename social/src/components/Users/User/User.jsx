import React from "react";
import s from './User.module.css';

const User = (props) => {
    return (
        <div className={s.frame}>
            <img className={s.avatar} src={props.avatar} />
            <div className={s.description}>
                <p>Имя: {props.fullName}</p>
                <p>Статус: {props.status}</p>
                <p>Страна: {props.country}</p>
                <p>Город: {props.city}</p>
            </div>
        </div>
    );
}

export default User;