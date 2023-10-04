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
    const hasError = touched && error;
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
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError && s.error)} >
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}