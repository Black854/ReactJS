import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const PostsData = [
    {id: 1, postText: 'Hi bro', likesCount: 1},
    {id: 2, postText: 'How are you?', likesCount: 0},
    {id: 3, postText: 'Bro??', likesCount: 1}
]

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
            <Post message={PostsData[0].postText} likesCount={PostsData[0].likesCount} />
            <Post message={PostsData[1].postText} likesCount={PostsData[1].likesCount} />
            <Post message={PostsData[2].postText} likesCount={PostsData[2].likesCount} />
        </div>);
}

export default MyPosts;