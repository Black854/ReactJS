import s from './Message.module.css'
import React from 'react'
import Item from './Item/Item'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Textarea } from '../../common/FormsControls/FormControls'

type PropsType = {
    sendMessage: (text: string) => void
    messages: Array<MessagesType>
}

type MessagesType = {
    id: number
    message: string
    senderId: number
}

const Messages: React.FC<PropsType> = ({sendMessage, messages}) => {
    let messagesElements = messages.map(message => <Item key={message.id} message={message.message} senderId={message.senderId} />)
    interface MyForm {
        text: string
    }
    const submit: SubmitHandler<MyForm> = values => {
        sendMessage(values.text)
        reset()
    }
    const error: SubmitErrorHandler<MyForm> = values => {
        console.log(values)
    }
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MyForm>()
    return (
        <div className={s.messages}>
            {messagesElements}
            <form onSubmit={handleSubmit(submit, error)}>
                <Textarea className={s.newMessageText} validate={{required: true, maxLength: 20}} errors={errors.text} name='text' register={register} />
                <button className={s.sendButton}>Send</button>
            </form>
        </div>
    );
}

export default Messages