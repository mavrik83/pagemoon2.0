import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
    withCredentials: false,
};

const apiRequest = axios.create(requestConfig);

if (process.env.NODE_ENV === 'development') {
    apiRequest.defaults.baseURL = 'http://localhost:3001/v1';
}

apiRequest.interceptors.response.use(
    (response) => response,
    (err) => Promise.reject(err),
);

export { apiRequest };
