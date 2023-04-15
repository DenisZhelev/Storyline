// import { requestFactory } from './requester';

// const baseUrl = `http://localhost:3030/users`;

// export const authServiceFactory = (token) => {
//     const request = requestFactory(token);

//     return {
//         login: (data) => request.post(`${baseUrl}/login`, data),
//         register: (data) => request.post(`${baseUrl}/register`, data),
//         logout: () => request.get(`${baseUrl}/logout`),
//     }
// };

import * as request from './requester'

const baseUrl = `http://localhost:3030/users`;
export const login = (loginData) => {
   return request.post(`${baseUrl}/login`,loginData)
}
export const register = (registerData) => {
    return request.post(`${baseUrl}/register`,registerData)
}
export const logout = () => {
    return request.get(`${baseUrl}/logout`)
}
