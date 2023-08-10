import React from "react";
import s from './User.module.css';

const User = (props) => {
    let button;

    let follow = () => {
        props.follow(props.id);
    }

    let unfollow = () => {
        props.unfollow(props.id);
    }

    props.followed === true ? button = <button onClick={unfollow} className={s.unfollow}>Unfollow</button> : button = <button onClick={follow} className={s.follow}>Follow</button>;
    return (
        <div className={s.frame}>
            <div className={s.followFrame}>
                <img className={s.avatar} src={props.avatar} />
                { button }
            </div>
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