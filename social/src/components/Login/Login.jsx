import React from "react";
import {Field, reduxForm} from 'redux-form';
import { login } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" type="text" placeholder="login" component={"input"} />
            </div>
            <div>
                <Field name="password" type="text" placeholder="password" component={"input"} />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component={"input"} /> Remember me
            </div>
            <button>Login</button>
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