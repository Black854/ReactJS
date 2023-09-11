import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from 'redux-form';

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='text' className={s.textarea} placeholder='Введите текст...' component={Textarea} validate={[required, maxLength(10)]} />
            <button className={s.addPostButton}>Add Post</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />);

    let createNewPost = (values) => {
        props.createNewPost(values.text);
    } 

    return (
        <div className={s.myPostsBlock}>
            <NewPostReduxForm onSubmit={createNewPost} />
            { postsElements }
        </div>);
}

export default MyPosts;