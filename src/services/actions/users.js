import { usersAPI } from "../../api/api";

export const SET_USERS_REQUEST = 'SET_USERS_REQUEST';
export const SET_USERS = 'SET_USERS';
export const SET_USERS_FAILED = 'SET_USERS_FAILED';
export const SHOW_MORE_REQUEST = 'SHOW_MORE_REQUEST';
export const SHOW_MORE = 'SHOW_MORE';
export const SHOW_MORE_FAILED = 'SHOW_MORE_FAILED';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    type: SHOW_MORE_REQUEST,
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