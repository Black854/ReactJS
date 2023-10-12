import { FieldError, UseFormRegister } from 'react-hook-form'
import s from './FormControls.module.css'
import React from 'react'
import { Input } from 'antd'

type InputPropsType = {
    register: UseFormRegister<any>
    errors: FieldError | undefined
    name: string
    validate?: {
        required?: boolean
        minLength?: number
        maxLength?: number
        pattern?: RegExp
    }
    placeholder?: string
    type?: string
    checkboxText?: string
    className?: string
}

export const Input1: React.FC<InputPropsType> = ({register, errors, name, validate, placeholder, type='text', checkboxText, className}) => {
    return (
        <div className={s.formControl + " " + (errors && s.error)}>
            <input {...register(name, {...validate})} placeholder={placeholder} type={type} className={className} />
            {checkboxText}
            {errors && errors.type === 'required' && <span>Поле обязательно для заполнения</span>}
            {errors && errors.type === 'maxLength' && <span>Максимальная длина поля не более {validate?.maxLength} символов</span>}
            {errors && errors.type === 'pattern' && <span>Введенные значения должны соответствовать URL-адресу</span>}
        </div>
    )
}

export const CustomInput: React.FC<InputPropsType> = ({register, errors, name, validate, placeholder, type='text', checkboxText, className}) => {
    return (
        <div className={s.formControl + " " + (errors && s.error)}>
            <Input {...register(name, {...validate})} placeholder={placeholder} type={type} className={className} />
            {checkboxText}
            {errors && errors.type === 'required' && <span>Поле обязательно для заполнения</span>}
            {errors && errors.type === 'maxLength' && <span>Максимальная длина поля не более {validate?.maxLength} символов</span>}
            {errors && errors.type === 'pattern' && <span>Введенные значения должны соответствовать URL-адресу</span>}
        </div>
    )
}

type TextareaPropsType = {
    register: UseFormRegister<any>
    errors: FieldError | undefined
    name: string
    validate?: {
        required?: boolean
        minLength?: number
        maxLength?: number
    }
    placeholder?: string
    className?: string
}

export const Textarea: React.FC<TextareaPropsType> = ({register, errors, name, validate, placeholder, className}) => {
    return (
        <div className={s.formControl + " " + (errors && s.error)}>
            <textarea className={className} {...register(name, {...validate})} placeholder={placeholder} />
            {errors && errors.type === 'required' && <span>Поле обязательно для заполнения</span>}
            {errors && errors.type === 'maxLength' && <span>Максимальная длина поля не более {validate?.maxLength} символов</span>}
        </div>
    )
}