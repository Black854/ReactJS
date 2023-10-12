import { CustomInput } from "../common/FormsControls/FormControls"
import s from "./Login.module.css"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"


type MapStatePropsType = {

}

type MapDispatchPropsType = {
    login: (data: any) => void
}

type OwnPropsType = {
    error: string | null
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const LoginForm: React.FC<PropsType> = ({login, error}) => {
    interface Login {
        email: string
        password: string
        rememberMe: boolean
    }
    const submit: SubmitHandler<Login> = data => {
        login(data)
    }

    const {register, handleSubmit, formState: {errors}} = useForm<Login>()
    return (
        <form onSubmit={handleSubmit(submit)} className={s.loginForm}>
            <CustomInput name="email" register={register} placeholder="Email" type="email" errors={errors.email} className={s.inputText} />
            <CustomInput name="password" register={register} placeholder="Password" type="password" errors={errors.password} className={s.inputText} />
            <CustomInput name="rememberMe" register={register} type="checkbox" errors={errors.rememberMe} checkboxText="Запомнить меня" />
            <div>
                <p className={s.error} >
                    {error}
                </p>
            </div>
            <button className={s.submit}>Login</button>
        </form>
    );
}

export default LoginForm