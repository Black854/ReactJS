import { Controller, FieldError, UseFormRegister } from 'react-hook-form'
import s from './FormControls.module.css'
import React from 'react'
import { Button, Col, Descriptions, DescriptionsProps, Image, Input, Modal, Row, Space, Upload, Typography, Form, Checkbox } from 'antd'
import TextArea from 'antd/es/input/TextArea'

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

type CustomControllerProps = {
    name: string
    type: string
    control: any
    label?: string
    required?: boolean
    maxLength?: number
    minLength?: number
    pattern?: string
    onBlur?: any
}

export const CustomController: React.FC<CustomControllerProps> = ({control, type, name, label, required, maxLength, minLength, pattern, onBlur}) => {
    let rules = {}
    if (required) {
        rules = {
            ...rules,
            required: 'Поле обязательно для заполнения'
        }
    }
    if (maxLength) {
        rules = {
            ...rules,
            maxLength: {
                value: maxLength,
                message: `Поле не может содержать более ${maxLength} символов`
            }
        }
    }
    if (minLength) {
        rules = {
            ...rules,
            minLength: {
                value: minLength,
                message: `Поле не может содержать менее ${minLength} символов`
            }
        }
    }
    if (pattern && pattern==='URL') {
        rules = {
            ...rules,
            pattern: {
                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                message: 'Введенное значение не соответствует URL-адресу',
            }
        }
    }
    return(
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                type==='checkbox' ? (<Form.Item label={label}><Checkbox checked={field.value} {...field} /></Form.Item>) : 
                type==='text' ? (<Form.Item label={label} validateStatus={fieldState.invalid ? 'error' : ''} help={fieldState.invalid ? fieldState.error?.message : null}> <Input {...field} /></Form.Item>) :
                (<Form.Item label={label} validateStatus={fieldState.invalid ? 'error' : ''} help={fieldState.invalid ? fieldState.error?.message : null} ><TextArea rows={4} {...field} onBlur={onBlur} /></Form.Item>)
            )}
        />
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