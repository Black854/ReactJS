import s from './Item.module.css'
import {NavLink} from "react-router-dom"
import React from "react"

type PropsType = {
    id: string
    name: string
    url: string
}

const Item: React.FC<PropsType> = ({id, name, url}) => {
    id = String(id)
    return (
        <div className={s.item}>
            <NavLink className={({isActive}) => isActive ? s.active : s.link} to={id}>
                <img className={s.userImage} src={url} alt=""/>
                <span className={s.name}>{name}</span>
            </NavLink>
        </div>
    );
}

export default Item