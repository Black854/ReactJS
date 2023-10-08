import { useForm } from 'react-hook-form';
import { PostType } from '../../../types/types';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import { CreateField } from '../../common/FormsControls/form-helpers';
import s from './MyPosts.module.css'
import s2 from './../../common/FormsControls/FormControls.module.css'
import Post from "./Post/Post";
import React from "react";
import { reduxForm } from 'redux-form';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form/dist/types';

type PropsType = {
    createNewPost: (text: string) => void
    posts: Array<PostType>
}

const MyPosts: React.FC<PropsType> = ({createNewPost, posts}) => {
    interface MyForm {
        text: string
    }
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MyForm>({
        defaultValues: {
            text: ''
        }
    })
    const submit: SubmitHandler<MyForm> = data => {
        createNewPost(data.text)
        reset()
    }
    const error: SubmitErrorHandler<MyForm> = data => {
        console.log(data)
    }
    let postsElements = posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />) 
    return (
        <div className={s.myPostsBlock}>
            <form onSubmit={handleSubmit(submit, error)}>
                <div className={s2.formControl + " " + (errors.text && s2.error)}>
                    <textarea className={ s.textarea } placeholder='Введите текст...' {...register('text', { required: true, maxLength: 150 }) } />
                    {errors.text && errors.text.type === 'required' && <span>Поле обязательно для заполнения</span>}
                    {errors.text && errors.text.type === 'maxLength' && <span>Максимальная длина поля не более 150 символов</span>}
                </div>
                <button className={s.addPostButton}>Add Post</button>
            </form>
            { postsElements }
        </div>
    )
}

export default MyPosts;