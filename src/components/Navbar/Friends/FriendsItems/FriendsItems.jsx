import s from './FriendsItems.module.css';
import React from "react";

const FriendsItem = (props) => {
    return (
        <div key={props.id} className={s.friendsItem}>
            <img className={s.avatar}
                 src={props.url}
                 alt=""/>
            <span className={s.userName}>{props.name}</span>
        </div>
    );
}

export default FriendsItem;