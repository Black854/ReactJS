import s from './Friends.module.css'
import React from "react"
import FriendsItem from "./FriendsItems/FriendsItems"
import { FriensType } from '../../../types/types'

type PropsType = {
    friends: Array<FriensType>
}

const Friends: React.FC<PropsType> = (props) => {
    let friendsElements = props.friends.map(friend => <FriendsItem key={friend.id} name={friend.name} url={friend.url} />)
    return (
        <div>
            <h3 className={s.title}>Friends</h3>
            <div className={s.friendsBlock}>
                { friendsElements }
            </div>
        </div>
    );
}

export default Friends