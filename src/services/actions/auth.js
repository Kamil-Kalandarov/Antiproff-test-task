import { usersAPI } from "../../api/api";

const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
const CREATE_USER = 'CREATE_USER';
const CREATE_USER_FAILED = 'CREATE_USER_FAILED';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN = 'LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT = 'LOGOUT';
const USER_AUTH_CHECK = 'USER_AUTH_CHECK';

export const userAuthCheck = (token) => {
  return {
    type: USER_AUTH_CHECK,
    token
  };
};

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};


export const createUser = (email, userName, password) => {
  return {
    type: CREATE_USER,
    email,
    userName,
    password,
  };
};

export const createUserFailed = (err) => {
  return {
    type: CREATE_USER_FAILED,
    err
  }
}

export const setUserRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const setUser = (email, password) => {
  return {
    type: LOGIN,
    email,
    password,
  };
};

export const setUserFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    err
  };
};

export const removeUserRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  }
}

export const removeUser = () => {
  return {
    type: LOGOUT,
  }
}

export const register = (email, userName, password) => {
  return (dispatch) => {
    usersAPI.createUserApi(email, userName, password)
      .then(data => {
        dispatch(createUser(email, userName, password))
      })
      .catch(error => {
        dispatch(createUserFailed(error.message))
      })
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    usersAPI.loginUserApi(email, password)
      .then(data => {
        if(data.token) {
          localStorage.setItem('token', data.token)
          dispatch(setUser(email, password))
        }
      })
      .catch(error => {
        dispatch(setUserFailed(error.message))
      })
  };
};

export const logout = () => {
  return (dispatch) => {
    usersAPI.logoutUserApi()
      .then(response => {
        localStorage.removeItem('token')
        console.log('token deleted');
        dispatch(removeUser())
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
        }
      })
  };
};