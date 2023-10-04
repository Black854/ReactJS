import { PostType } from '../../../types/types';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import { CreateField } from '../../common/FormsControls/form-helpers';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import { reduxForm } from 'redux-form';

const NewPostForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('text', Textarea, [required, maxLength], {className: s.textarea, placeholder: 'Введите текст...'}, null, null )}
            <button className={s.addPostButton}>Add Post</button>
        </form>
    )
}

type PropsType = {
    createNewPost: (text: string) => void
    resetForm: (formName: string) => void
    posts: Array<PostType>
}

const MyPosts: React.FC<PropsType> = ({createNewPost, resetForm, posts}) => {
    const formName = 'newPostForm';
    const NewPostReduxForm = reduxForm({form: formName, onSubmitSuccess: () => { resetForm(formName) }})(NewPostForm);

    let postsElements = posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />)
    let createNewPostFunc = (values: any) => {
        createNewPost(values.text);
    }

    return (
        <div className={s.myPostsBlock}>
            <NewPostReduxForm onSubmit={createNewPostFunc} />
            { postsElements }
        </div>);
}

export default MyPosts;