import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();

    let createNewPost = () => {
        props.createNewPost();
    }

    let updateArea = () => {
        let text = newPostElement.current.value;
        props.updateArea(text);
    } 

    return (
        <div className={s.myPostsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement} className={s.textarea} onChange={updateArea} value={props.newPostText} />
            </div>
            <button onClick={ createNewPost } className={s.addPostButton}>
                Add Post
            </button>
            { postsElements }
        </div>);
}

export default MyPosts;