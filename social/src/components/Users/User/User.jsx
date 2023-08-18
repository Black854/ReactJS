import React from "react";
import s from './User.module.css';
import userPhoto from '../../../img/user.jpg';
import {NavLink} from 'react-router-dom';
import axios from "axios";

const User = (props) => {
    let button;

    let follow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {withCredentials: true, headers: {"API-KEY": "4f3d39e5-214f-420c-9ab3-f8c322bdb13c"}})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(props.id);
                }
            });
    }

    let unfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{withCredentials: true, headers: {"API-KEY": "4f3d39e5-214f-420c-9ab3-f8c322bdb13c"}})
        .then(response => {
            if (response.data.resultCode === 0) {
                props.unfollow(props.id);
            }
        });
    }

    props.followed ? button = <button onClick={unfollow} className={s.unfollow}>Unfollow</button> : button = <button onClick={follow} className={s.follow}>Follow</button>;
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