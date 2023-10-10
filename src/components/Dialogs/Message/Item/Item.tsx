import s from './Item.module.css'
import React from "react"

type Propstype = {
    senderId: number
    message: string
}

const Item: React.FC<Propstype> = ({senderId, message}) => {
    return <div className={senderId === 1 ? s.myItem : s.otherItem}>{message}</div>
}

export default Item