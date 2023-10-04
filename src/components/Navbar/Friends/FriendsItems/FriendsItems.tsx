import s from './FriendsItems.module.css';
import React from "react";

type PropsType = {
    url: string
    name: string
}

const FriendsItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.friendsItem}>
            <img className={s.avatar}
                 src={props.url}
                 alt=""/>
            <span className={s.userName}>{props.name}</span>
        </div>
    );
}

export default FriendsItem;