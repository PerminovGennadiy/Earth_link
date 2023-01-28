import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../../UI/FormsControl/FormsControl";
import cl from './Login.module.css';
import styles from '../../UI/FormsControl/FormsControl.module.css';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={cl.login__container}>
                <div>
                    <div>
                        <Field className={cl.form}
                            placeholder={"Емейл"}
                            name={'email'}
                            component={Input}
                            validate={[required]} />
                    </div>
                    <div>
                        <Field className={cl.form}
                            type='password'
                            placeholder={"Пароль"}
                            name={'password'}
                            component={Input}
                            validate={[required]} />
                    </div>
                    <div className={cl.rememberMeContainer}>
                        <Field className={cl.buttonRememberMe}
                            type={'checkbox'}
                            name={'rememberMe'}
                            component={Input} />
                        <div>Запомнить пароль?</div>
                    </div>
                    <div>
                        {props.captchaUrl && <img src={props.captchaUrl} className={cl.captchaImg} />}
                        {props.captchaUrl && createField('Введите символы с картинки', 'captcha', [required], Input, {}, '', 'captchaInput')}
                    </div>
                    {props.error && <div className={styles.formSummaryError}>
                        {props.error}
                    </div>
                    }
                    <div>
                        <button className={cl.submitButton}>Войти</button>
                    </div>
                </div>
                <div className={cl.testData}>
                    <div>Можете использовать эти тестовые данные, для входа в аккаунт:</div>
                    <div style={{fontSize: '20px', fontWeight: '700'}}>Email: free@samuraijs.com</div>
                    <div style={{fontSize: '20px', fontWeight: '700'}}>Password: free</div>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Войти</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login);