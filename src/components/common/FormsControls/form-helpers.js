import { Field } from "redux-form";

export const CreateField = (name, component, validate=null, otherProps=null, divClassName=null, text=null) => {
    return (
        <div className={divClassName}>
            <Field name={name} component={component} validate={validate} {...otherProps} /> {text}
        </div>
    );
}