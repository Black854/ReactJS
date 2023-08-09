import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import React from "react";
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     let state = props.store.getState().profilePage;
//     let createNewPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     let updateArea = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     } 

//     return (
//         <MyPosts createNewPost={createNewPost} updateArea={updateArea} posts={state.posts} newPostText={state.newPostText} />);
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createNewPost () {
            dispatch(addPostActionCreator());
        },
    
        updateArea (text) {
            dispatch(updateNewPostTextActionCreator(text));
        } 
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;