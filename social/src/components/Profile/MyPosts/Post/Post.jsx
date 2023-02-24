import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt=""/>
            {props.message}
            <div>
                likes: {props.likesCount}
            </div>
        </div>);
}

export default Post;