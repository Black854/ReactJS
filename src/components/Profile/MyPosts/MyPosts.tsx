import { useForm } from 'react-hook-form'
import { PostType } from '../../../types/types'
import Post from './Post/Post'
import React from 'react'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form/dist/types'
import { CustomController } from '../../common/FormsControls/FormControls'
import { Button, Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions } from '../../../redux/profile-reducer'
import { getPosts } from '../../../redux/profile-selectors'

const MyPosts: React.FC = () => {
    let posts = useSelector(getPosts)
    let dispatch = useDispatch()
    
    type NewPostFormType = {
        text: string
    }

    const { handleSubmit, reset, resetField, control, formState: { errors } } = useForm<NewPostFormType>()

    const submit: SubmitHandler<NewPostFormType> = data => {
        dispatch(profileActions.createNewPost(data.text))
        reset()
    }

    const error: SubmitErrorHandler<NewPostFormType> = data => {
        // console.log(data)
    }

    let postsElements = posts.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />) 
    return (
        <div>
            <Form onFinish={handleSubmit(submit, error)}>
                <CustomController control={control} name='text' type='textarea' maxLength={100} required={true} styleProps={{margin: '30px 0 0 0'}} />
                <Form.Item style={{textAlign: 'center'}}><Button type='primary' htmlType="submit">Добавить пост</Button></Form.Item>
            </Form>
            { postsElements }
        </div>
    )
}

export default MyPosts