import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import React from "react"
import Friends from "./Friends/Friends"
import { FriensType } from '../../types/types'

type PropsType = {
    friends: Array<FriensType>
}

const Navbar: React.FC<PropsType> = (props) => {
    return (
        <div className={s.nav}>
            <div>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/profile'>Мой профиль</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/users'>Пользователи</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/dialogs'>Сообщения</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/news'>Новости</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/music'>Музыка</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to='/settings'>Настройки</NavLink>
            </div>
            <Friends friends={props.friends} />
        </div>
    );
}

export default Navbar