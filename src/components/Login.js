import { useState } from 'react';

function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(email, password);
    }


    return(
        <form className="sign-login-form" onSubmit={handleSubmit}>
            <h2 className="sign-login-form__title sign-login-form__title_login">Вход</h2>
            <input className="sign-login-form__input sign-login-form__input_login-email" type="email" placeholder="Email" onChange={handleEmailChange} required/>
            <input className="sign-login-form__input sign-login-form__input_login-password" type="password" placeholder="Пароль" onChange={handlePasswordChange} required/>
            <button className="sign-login-form__button sign-login-form__button_login" type="submit">Войти</button>
        </form>
    );
};

export default Login;