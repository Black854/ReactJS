import s from './Post.module.css'
import React from "react"

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = ({message, likesCount}) => {
    return (
        <div className={s.postBlock}>
            <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt=""/>
            {message}
            <div>
                like {likesCount}
            </div>
        </div>)
}

export default Post