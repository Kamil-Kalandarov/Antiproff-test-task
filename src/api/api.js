import axios from "axios"

// экземпляр с базовым url для дальнейших запросов
const instance = axios.create({
  baseURL: 'https://reqres.in/api/'
});

// объект со всеми методами для запросов к API, в дальнейшем можно обращаться к каждому из них через usersAPI.метод
export const usersAPI = {
  getUsersApi(usersCount) {
    return instance.get(`users?per_page=${usersCount}`)
       .then(response => {
         return response.data
       });
   },

   showMoreUsersApi(usersCount) {
    return instance.get(`users?per_page=${usersCount + 1}`)
      .then(response => {
        return response.data
      });
  },

  showCurrentUserApi(userId) {
    return instance.get(`users/${userId}`)
      .then(response => {
        return response.data
      });
  },

  createUserApi(email, userName, password) {
    return instance.post(`register`, { email, userName, password })
      .then(response => {
        return response.data
      });
  },

  loginUserApi(email, password) {
    return instance.post(`login`, { email, password })
        .then(response => {
          return response.data
        });
  },

  logoutUserApi() {
    return instance.post(`logout`)
      .then(response => {
        return response
      });
  },
}
  
