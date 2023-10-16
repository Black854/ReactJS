import { Button, Col, Form, Row, Typography } from "antd"
import { CustomController } from "../common/FormsControls/FormControls"
import s from "./Login.module.css"
import React, { useState } from "react"
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth-reducer"
const { Text } = Typography;


const LoginForm: React.FC= () => {
    const [localError, setError] = useState('')
    
    type LoginFormType = {
        email: string
        password: string
        rememberMe: boolean
    }

    const dispatch = useDispatch()

    const submit: SubmitHandler<LoginFormType> = data => {
        //@ts-ignore
        dispatch(login(data))
        console.log(data)
    }

    const error: SubmitErrorHandler<LoginFormType> = data => {
        // data.email && setError(localError + data.email.message)
        // data.password && setError(localError + data.password.message)
        // data.rememberMe && setError(localError + data.rememberMe.message)
    }

    const { handleSubmit, control, formState: { errors } } = useForm<LoginFormType>({
        defaultValues: {rememberMe: false}
    })

    return (
        <Form onFinish={handleSubmit(submit, error)}>
            <Row>
                <Col span={10} style={{textAlign: 'center'}} push={7}>
                    <CustomController control={control} name='email' type='text' label='Email' required={true} maxLength={40} />
                    <CustomController control={control} name='password' type='password' label='Пароль' required={true} maxLength={40} />
                    <CustomController control={control} name='rememberMe' type='checkbox' label='Запомнить меня' />
                    <Text type="danger">{localError}</Text>
                </Col>
            </Row>
            <Row>
                <Col span={2} style={{textAlign: 'center'}} push={11}>
                    <Form.Item><Button type="primary" htmlType="submit">Авторизоваться</Button></Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default LoginForm