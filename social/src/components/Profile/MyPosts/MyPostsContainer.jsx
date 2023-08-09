import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import React from "react";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let createNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateArea = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    } 

    return (
        <MyPosts createNewPost={createNewPost} updateArea={updateArea} posts={state.posts} newPostText={state.newPostText} />);
}

export default MyPostsContainer;