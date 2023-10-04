import { reduxForm } from "redux-form";
import { CreateField } from "../common/FormsControls/form-helpers";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormControls";
import s from "./Login.module.css";
import React from "react";


type MapStatePropsType = {

}

type MapDispatchPropsType = {
    handleSubmit: any
}

type OwnPropsType = {
    error: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const LoginForm: React.FC<PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            { CreateField("email", Input, [required], {className: s.inputText, type: "email", placeholder: "Email"}, null, null ) }
            { CreateField("password", Input, [required], {className: s.inputText, type: "password", placeholder: "Password"}, null, null ) }
            { CreateField("rememberMe", "input", [], {type: "checkbox"}, s.rememberMe, "Remember me" ) }
            <div>
                <p className={s.error} >
                    {props.error}
                </p>
            </div>
            <button className={s.submit}>Login</button>
        </form>
    );
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);