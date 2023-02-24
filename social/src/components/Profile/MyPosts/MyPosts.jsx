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
            <Post message="Hi bro" likesCount="0"/>
            <Post message="How are you?" likesCount="0"/>
            <Post message="Bro?" likesCount="0"/>
        </div>);
}

export default MyPosts;