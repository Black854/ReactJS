import { useForm } from 'react-hook-form'
import { PostType } from '../../../types/types'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form/dist/types'
import { Textarea } from '../../common/FormsControls/FormControls'

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
                <Textarea register={register} errors={errors.text} name='text' validate={{required: true, maxLength: 150}} className={ s.textarea } placeholder='Введите текст...' />
                <button className={s.addPostButton}>Add Post</button>
            </form>
            { postsElements }
        </div>
    )
}

export default MyPosts