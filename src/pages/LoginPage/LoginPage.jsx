import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './loginPage.module.css';
import { REGISTER_ROUTE } from '../../constans/rotes';
import { emailValidation, loginPasswordValidation, onBlur } from '../../utils/validation';
import { login } from '../../services/actions/auth';
import Input from '../../components/Form/Input/Input';
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState('eve.holt@reqres.in');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 

  const isButtonDisabled = emailValue && passwordValue && !emailError && !passwordError ? false : true;

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(login(emailValue, passwordValue))
  };

  return (
    <div className={styles.loginPage}>
      <Form title={'Войти'} onSubmit={onSubmit} buttonName={'Войти'} disabled={isButtonDisabled}>
        <Input 
          fieldName={'Электронная почта'}
          id={'emaul'} 
          type={'email'}
          name={'email'} 
          placeholder={'введите свой email'}
          value={emailValue} 
          onChange={(event) => emailValidation(setEmailValue, setEmailError, event)} 
          onBlur={(event) => onBlur(setEmailValue, setEmailError, event)}
          error={emailError}
        />
        <Input 
          fieldName={'Пароль'}
          id={'password'}
          type={'password'}
          name={'password'}
          placeholder={'введите свой пароль'} 
          value={passwordValue} 
          onChange={(event) => loginPasswordValidation(setPasswordValue, setPasswordError, event)}
          onBlur={(event) => onBlur(setPasswordValue, setPasswordError, event)}
          error={passwordError}
        />
        <p>Вы — новый пользователь?
          <Link className={styles.loginPage__link} to={REGISTER_ROUTE}>Зарегистрироваться</Link>
        </p>
      </Form>
    </div>
  );
};
