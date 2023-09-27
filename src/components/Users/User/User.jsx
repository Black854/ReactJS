import React from "react";
import s from './User.module.css';
import userPhoto from '../../../img/user.jpg';
import {NavLink} from 'react-router-dom';

const User = (props) => {
    let button;

    let follow = () => {
        props.follow(props.id);
    }

    let unfollow = () => {
        props.unfollow(props.id);
    }
    props.followed  ? button = <button disabled={props.followInProgress.some(id => id === props.id)} onClick={unfollow} className={s.unfollow}>Unfollow</button> 
                    : button = <button disabled={props.followInProgress.some(id => id === props.id)} onClick={follow} className={s.follow}>Follow</button>;
    return (
        <div className={s.frame}>
            <div className={s.followFrame}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={s.avatar} src={props.avatar ? props.avatar : userPhoto} />
                </NavLink>
                { button }
            </div>
            <div className={s.description}>
                <p>Имя: {props.fullName}</p>
                <p>Статус: {props.status}</p>
                {/* <p>Страна: {props.country}</p>
                <p>Город: {props.city}</p> */}
            </div>
        </div>
    );
}

export default User;