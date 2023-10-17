import s from './Message.module.css'
import React from 'react'
import Item from './Item/Item'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { CustomController } from '../../common/FormsControls/FormControls'
import { Button, Col, Form, Row } from 'antd'

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
    const {control, handleSubmit, reset, formState: {errors}} = useForm<MyForm>()
    return (
        <div className={s.messages}>
            {messagesElements}
            <Form onFinish={handleSubmit(submit, error)}>
                <CustomController control={control} name='text' type='textarea' maxLength={100} required={true} styleProps={{marginTop: '20px'}} />
                <Row>
                    <Col span={4} push={10} style={{textAlign: 'center'}}>
                        <Button htmlType='submit'>Отправить</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default Messages