import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import { CreateField } from '../../common/FormsControls/form-helpers';
import { CreateField } from '../../common/FormsControls/form-helpers';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {reduxForm, reset} from 'redux-form';

const NewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('text', Textarea, [required, maxLength], {className: s.textarea, placeholder: 'Введите текст...'} )}
            {CreateField('text', Textarea, [required, maxLength], {className: s.textarea, placeholder: 'Введите текст...'} )}
            <button className={s.addPostButton}>Add Post</button>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('newPostForm'));

const NewPostReduxForm = reduxForm({form: 'newPostForm', onSubmitSuccess: afterSubmit})(NewPostForm);

const MyPosts = ({createNewPost, posts}) => {
    let postsElements = posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />);

    let createNewPostFunc = (values) => {
        createNewPost(values.text);
    } 

    return (
        <div className={s.myPostsBlock}>
            <NewPostReduxForm onSubmit={createNewPostFunc} />
            { postsElements }
        </div>);
}

export default MyPosts;