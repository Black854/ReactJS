import s from './Message.module.css'
import React from 'react'
import Item from './Item/Item'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import s2 from './../../common/FormsControls/FormControls.module.css'

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
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MyForm>({
        defaultValues: {
            text: ''
        }
    })
    return (
        <div className={s.messages}>
            {messagesElements}
            <form onSubmit={handleSubmit(submit, error)}>
                <div className={s2.formControl + " " + (errors.text && s2.error)}>
                    <textarea {...register('text', {required: true, maxLength: 20}) } className={s.newMessageText} />
                    {errors.text && errors.text.type === 'required' && <span>Поле обязательно для заполнения</span>}
                    {errors.text && errors.text.type === 'maxLength' && <span>Максимальная длина поля не более 150 символов</span>}
                </div>
                <button className={s.sendButton}>Send</button>
            </form>
        </div>
    );
}

export default Messages;