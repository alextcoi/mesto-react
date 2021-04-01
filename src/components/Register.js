import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({onRegister}) {
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
        onRegister(email, password);
    }

    return(
            <form className="sign-login-form"  onSubmit={handleSubmit}>
                <h2 className="sign-login-form__title sign-login-form__title_signup">Регистрация</h2>
                <input className="sign-login-form__input sign-login-form__input_signup-email" type="email" placeholder="Email" onChange={handleEmailChange} required/>
                <input className="sign-login-form__input sign-login-form__input_signup-password" type="password" placeholder="Пароль" onChange={handlePasswordChange} required/>
                <button className="sign-login-form__button sign-login-form__button_signup" type="submit">Зарегистрироваться</button>
                <div className="sign-login-form__text">
                    Уже зарегистрированы? 
                    <Link to="/sign-in" className="sign-login-form__text sign-login-form__text_login">Войти</Link>
                </div>
            </form>
    );
};

export default Register;

//email@email.ru