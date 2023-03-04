import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.postText} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let createNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.myPostsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement} className={s.textarea} ></textarea>
            </div>
            <button onClick={ createNewPost } className={s.addPostButton}>
                Add Post
            </button>
            { postsElements }
        </div>);
}

export default MyPosts;