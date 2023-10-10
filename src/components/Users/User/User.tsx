import React from 'react'
import s from './User.module.css'
import userPhoto from '../../../img/user.jpg'
import {NavLink} from 'react-router-dom'

type PropsType = {
    id: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    followed: boolean
    followInProgress: Array<number>
    avatar: string | null
    fullName: string
    status: string
}

const User: React.FC<PropsType> = ({id, follow, unfollow, followed, followInProgress, avatar, fullName, status}) => {
    let button
    let followCallback = () => {
        follow(id)
    }

    let unfollowCallback = () => {
        unfollow(id)
    }
    followed  ? button = <button disabled={followInProgress.some(userId => userId === id)} onClick={unfollowCallback} className={s.unfollow}>Unfollow</button> 
                    : button = <button disabled={followInProgress.some(userId => userId === id)} onClick={followCallback} className={s.follow}>Follow</button>
    return (
        <div className={s.frame}>
            <div className={s.followFrame}>
                <NavLink to={'/profile/' + id}>
                    <img className={s.avatar} src={avatar ? avatar : userPhoto} />
                </NavLink>
                { button }
            </div>
            <div className={s.description}>
                <p>Имя: {fullName}</p>
                <p>Статус: {status}</p>
            </div>
        </div>
    );
}

export default User;