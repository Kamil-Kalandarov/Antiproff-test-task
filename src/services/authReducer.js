const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
const CREATE_USER = 'CREATE_USER';
const CREATE_USER_FAILED = 'CREATE_USER_FAILED';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN = 'LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT = 'LOGOUT';
const USER_AUTH_CHECK = 'USER_AUTH_CHECK';

const initialState = {
  email: null,
  userName: null,
  password: null,
  isAuthorized: false,
  isLoading: false,
  registartionFailed: false,
  loginFailed: false,
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state, 
        email: action.email,
        isLoading: true,
      };
    case CREATE_USER:
      return {
        ...state, 
        email: action.email,
        userName: action.userName,
        password: action.password,
        isLoading: false,
      };
    case CREATE_USER_FAILED:
      return {
        ...state, 
        isLoading: true,
        isRegistered: false,
        errorMessage: action.errorMessage
      };
    case LOGIN_REQUEST:
      return {
        ...state, 
        isLoading: true,
        
      };
    case LOGIN:
      return {
        ...state, 
        email: action.email,
        password: action.password,
        isAuthorized: true,
        isLoading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state, 
        isLoading: true,
        loginFailed: true,
        errorMessage: action.errorMessage
      };
    case LOGOUT_REQUEST:
      return {
        ...state, 
        isLoading: true,
      };
    case LOGOUT:
      return {
        ...state, 
        email: null,
        password: null,
        isAuthorized: false,
      };
    case USER_AUTH_CHECK:
      return {
        ...state, 
        isAuthorized: true,
      };
    default:
      return state;
  };
};

export default authReducer;
