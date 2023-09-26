import { Field } from "redux-form";

export const CreateField = (className, name, otherProps, placeholder, component, validate, divClassName=null, text=null) => {
    return (
        <div className={divClassName}>
            <Field className={className} name={name} {...otherProps} placeholder={placeholder} component={component} validate={validate} /> {text}
        </div>
    );
}