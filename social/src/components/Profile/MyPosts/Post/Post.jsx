import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.postBlock}>
            <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt=""/>
            Post
            <div>
                like
            </div>
        </div>);
}

export default Post;