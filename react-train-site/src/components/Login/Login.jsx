import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, reqired } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../statements/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[reqired, maxLength30]} />
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} validate={[reqired, maxLength30]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[reqired]} /> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Navigate to={"/profile"} />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
