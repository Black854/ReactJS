import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.postText} likesCount={post.likesCount} />);
    return (
        <div className={s.myPostsBlock}>
            My posts
            <div>
                <textarea className={s.textarea} />
            </div>
            <button className={s.addPostButton}>
                Add Post
            </button>
            { postsElements }
        </div>);
}

export default MyPosts;