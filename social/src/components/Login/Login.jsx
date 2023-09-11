import React from "react";
import {Field, reduxForm} from 'redux-form';
import { login } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormControls";
import s from "./Login.module.css";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <div>
                <Field className={s.inputText} name="email" type="text" placeholder="login" component={Input} validate={[required]} />
            </div>
            <div>
                <Field className={s.inputText} name="password" type="text" placeholder="password" component={Input} validate={[required]} />
            </div>
            <div className={s.rememberMe} >
                <Field name="rememberMe" type="checkbox" component="input" /> Remember me
            </div>
            <button className={s.submit}>Login</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData);
    }

    if (props.isAuth === true) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login);