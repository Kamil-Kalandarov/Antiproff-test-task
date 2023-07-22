import { usersAPI } from "../api/api";
import { 
  SET_USERS_REQUEST,
  SET_USERS,
  SET_USERS_FAILED,
  SHOW_MORE_REQUEST,
  SHOW_MORE,
  SHOW_MORE_FAILED,
  SET_TOTAL_USERS_COUNT
} from "./actions/users";

const initialState = {
  users: [],
  usersCount: 8,
  totalUsersCount: 0,
  setUsersFailed: false,
  showMoreFailed: false,
  isLoading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_REQUEST:
      return {
        ...state, 
        isLoading: true
      };
    case SET_USERS:
      return {
        ...state, 
        users: action.users,
        isLoading: false
      };
    case SET_USERS_FAILED:
      return {
        ...state, 
        setUsersFailed: true,
        isLoading: false
      };
    case SHOW_MORE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SHOW_MORE:
      return {
        ...state,
        usersCount: state.usersCount + 1,
        isLoading: false
      };
    case SHOW_MORE_FAILED:
      return {
        ...state,
        showMoreFailed: true,
        isLoading: false
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    default:
      return state;
  };
};

export const setUsersRequest = () => {
  return {
    type: SET_USERS_REQUEST,
    isLoading: true
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
    isLoading: false
  };
};

export const setUsersFailed = () => {
  return {
    type: SET_USERS_FAILED,
    isLoading: false,
    setUsersFailed: true
  }
}

export const setUsersCountRequest = () => {
  return {
    type: SHOW_MORE,
    isLoading: true
  };
};

export const setUsersCount = (usersCount) => {
  return {
    type: SHOW_MORE,
    usersCount: usersCount + 8,
    isLoading: false
  };
};

export const setUsersCountFailed = () => {
  return {
    type: SHOW_MORE_FAILED,
    isLoading: false,
    showMoreFailed:true
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  };
};

export const getUsers = (usersCount) => {
  return (dispatch) => {
    usersAPI.getUsersApi(usersCount).then(data => {
      dispatch(setUsers(data.data))
      dispatch(setTotalUsersCount(data.total))
    })
    .catch((error) => {
      dispatch(setUsersFailed(error.message))
    })
  };
};

export const showMoreUsers = (usersCount) => {
  return (dispatch) => {
    dispatch(setUsersCount(usersCount))
    usersAPI.showMoreUsersApi(usersCount).then(data => {
      dispatch(setUsers(data.data))
    })
    .catch((error) => {
      dispatch(setUsersFailed(error.message))
    })
  };
};

export default usersReducer;
