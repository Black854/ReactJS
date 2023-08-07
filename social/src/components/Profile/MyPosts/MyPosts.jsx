import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.store._state.profilePage.posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let createNewPost = () => {
        props.store.addPost();
    }

    let updateArea = () => {
        let text = newPostElement.current.value;
        props.store.updateNewPostText(text);
    } 

    return (
        <div className={s.myPostsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement} className={s.textarea} onChange={updateArea} value={props.store._state.profilePage.newPostText} />
            </div>
            <button onClick={ createNewPost } className={s.addPostButton}>
                Add Post
            </button>
            { postsElements }
        </div>);
}

export default MyPosts;