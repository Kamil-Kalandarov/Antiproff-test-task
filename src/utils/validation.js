const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const nameValidation = (setValue, setError, event) => {
  const newEmailValue = event.target.value
  setValue(newEmailValue)
  if(!newEmailValue) {
    setError('Поле не может быть пустым')
  } else {
    setError('')
  };
};

export const emailValidation = (setValue, setError, event) => {
  const newEmailValue = event.target.value
  setValue(newEmailValue)
  if(!newEmailValue) {
    setError('email не может быть пустым')
  } else if(!emailRegExp.test(newEmailValue)) {
    setError('email некорректный')
  } else {
    setError('')
  };
};

export const loginPasswordValidation = (setValue, setError, event) => {
  const newPasswordValue = event.target.value
  setValue(newPasswordValue)
  if(!newPasswordValue) {
    setError('Пароль не может быть пустым')
  } else {
    setError('')
  };
};

export const passwordValidation = (setValue, setError, event) => {
  const newPasswordValue = event.target.value
  setValue(newPasswordValue)
  if(!newPasswordValue) {
    setError('Пароль не может быть пустым')
  } else if(newPasswordValue.length <= 3) {
    setError('Пароль слишком короткий')
  } else {
    setError('')
  };
};

export const repetedPasswordValidation = (setValue, setError, event) => {
  const newRepetedPasswordValue = event.target.value
  setValue(newRepetedPasswordValue)
  if(!newRepetedPasswordValue) {
    setError('Поле не может быть пустым')
  } else {
    setError('')
  };
};

export const onBlur =(setValue, setError, event) => {
  const newEmailValue = event.target.value
  setValue(newEmailValue)
  if(!newEmailValue) {
    setError('Поле не может быть пустым')
  };
};