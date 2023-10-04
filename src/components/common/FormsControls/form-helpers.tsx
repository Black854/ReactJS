import { Field } from "redux-form";
import React from 'react'

type OtherPropsType = {
    className?: string
    placeholder?: string
    type?: string
}

export const CreateField = (name: string, 
                            component: any, 
                            validate: Array<(value: any) => string | undefined> | null, 
                            otherProps: OtherPropsType, 
                            divClassName: string | null, 
                            text: string | null
    ) => {
    return (
        <div className={divClassName ? divClassName : ''}>
            <Field name={name} component={component} validate={validate} {...otherProps} /> {text}
        </div>
    );
}