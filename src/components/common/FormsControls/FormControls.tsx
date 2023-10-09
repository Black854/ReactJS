import s from './FormControls.module.css';
import React from 'react'

type MetaType = {
    touched: boolean
    error: string
}

type PropsType = {
    input: any
    meta: MetaType
}

export const Textarea: React.FC<PropsType> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + " " + (hasError && s.error)} >
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input: React.FC<PropsType> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + " " + (hasError && s.error)} >
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

type Input2PropsType = {
    register: any
    errors: any
    name: string
    maxLength?: string
    required?: string
}

export const Input2: React.FC<Input2PropsType> = ({register, errors, name, maxLength, required}) => {
    return (
        <div className={s.formControl + " " + (errors.contacts?.facebook && s.error)}>
            <input {...register(name, {maxLength && maxLength: maxLength})} placeholder="Facebook" />
            {errors.contacts?.facebook && errors.contacts.facebook.type === 'maxLength' && <span>Максимальная длина поля не более 40 символов</span>}
        </div>
    )
}