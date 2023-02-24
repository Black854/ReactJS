import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
            My posts
            <div>
                <textarea className={s.textarea}></textarea>
            </div>
            <button className={s.addPostButton}>
                Add Post
            </button>
            <Post/>
            <Post/>
            <Post/>
        </div>);
}

export default MyPosts;