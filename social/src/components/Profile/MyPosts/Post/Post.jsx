import s from './Post.module.css'
import React from "react";

const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt=""/>
            {props.message}
            <div>
                like {props.likesCount}
            </div>
        </div>);
}

export default Post;