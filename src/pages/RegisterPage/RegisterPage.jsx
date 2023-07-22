import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './registerPage.module.css';
import { LOGIN_ROUTE } from '../../constans/rotes';
import { emailValidation, passwordValidation, repetedPasswordValidation, onBlur, nameValidation } from '../../utils/validation';
import { register } from '../../services/actions/auth';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const errorMessage = useSelector(store => store.auth.errorMessage)

  const [nameValue, setNameValue] = useState('Арутр');
  const [emailValue, setEmailValue] = useState('eve.holt@reqres.in');
  const [passwordValue, setPasswordValue] = useState('');
  const [repetedPasswordValue, setRepetedPasswordValue] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState(''); 
  const [repetedPasswordError, setRepetedPasswordError] = useState('');
  
  const isButtonDisabled = nameValue && emailValue && passwordValue && !repetedPasswordError && !emailError && !passwordError ? false : true;

  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    if(passwordValue !== repetedPasswordValue) {
      setRepetedPasswordError('пароли не совпадают')
    } else {
      setRepetedPasswordError('')
      dispatch(register(emailValue, nameValue, passwordValue, repetedPasswordValue))
      navigate(LOGIN_ROUTE)
    }
  }

  return (
    <div className={styles.registerPage}>
      <Form title={'Регистрация'} onSubmit={onSubmit} buttonName={'Зарегистрироваться'} disabled={isButtonDisabled}>
        <Input 
          fieldName={'Имя'}
          id={'name'}
          type={'text'}
          name={'name'}
          placeholder={'введите свое имя'} 
          value={nameValue} 
          onChange={(event) => nameValidation(setNameValue, setNameError, event)}
          onBlur={(event) => onBlur(setNameValue, setNameError, event)}
          error={nameError}
        />
        <Input 
          fieldName={'Электронная почта'}
          id={'email'}
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
          onChange={(event) => passwordValidation(setPasswordValue, setPasswordError, event)}
          onBlur={(event) => onBlur(setPasswordValue, setPasswordError, event)}
          error={passwordError}
        />
        <Input 
          fieldName={'Подтвердите пароль'}
          id={'repetedPassword'}
          type={'password'}
          name={'repetedPassword'}
          placeholder={'повторите пароль'} 
          value={repetedPasswordValue} 
          onChange={(event) => repetedPasswordValidation(setRepetedPasswordValue, setRepetedPasswordError, event)} 
          onBlur={(event) => onBlur(setRepetedPasswordValue, setRepetedPasswordError, event)}
          error={repetedPasswordError}
        />
        <p>Уже есть аккаунт?
          <Link className={styles.registerPage__link} to={LOGIN_ROUTE}>Войти</Link>
        </p>
      </Form>
    </div>
  );
};


{/* <form className={styles.registerPage__form} onSubmit={onSubmit}>
  <h2>Регистрация</h2>
  <div className={styles.registerPage__inputContainer}>
    <Input 
      id={'name'}
      name={'name'}
      placeholder={'введите свое имя'} 
      value={nameValue} 
      onChange={onNameChange} 
    />
    <Input 
      id={'email'}
      name={'email'}
      placeholder={'введите свой email'} 
      value={emailValue} 
      onChange={onEmailChange} 
    />
    <Input 
      id={'password'}
      name={'password'}
      placeholder={'введите свой пароль'} 
      value={passwordValue} 
      onChange={onPasswordChange} 
      autoComplete='off'
    />
    <Input 
      id={'repetedPassword'}
      name={'repetedPassword'}
      placeholder={'повторите пароль'} 
      value={repetedPasswordValue} 
      onChange={onRepetedPasswordChange} 
      autoComplete='off'
    />
    </div>
    <button onClick={onSubmit}>Зарегистрироваться</button>
</form> */}