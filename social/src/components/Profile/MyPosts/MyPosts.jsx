import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let createNewPost = () => {
        props.addPost();
    }

    let updateArea = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    } 

    return (
        <div className={s.myPostsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement} className={s.textarea} onChange={updateArea} value={props.profilePage.newPostText} />
            </div>
            <button onClick={ createNewPost } className={s.addPostButton}>
                Add Post
            </button>
            { postsElements }
        </div>);
}

export default MyPosts;