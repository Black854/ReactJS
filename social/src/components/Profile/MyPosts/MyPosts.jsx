import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const PostsData = [
    {id: 1, postText: 'Hi bro', likesCount: 1},
    {id: 2, postText: 'How are you?', likesCount: 0},
    {id: 3, postText: 'Bro?', likesCount: 2}
]

let postsElements = PostsData.map(post => <Post message={post.postText} likesCount={post.likesCount} />);

const MyPosts = () => {
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