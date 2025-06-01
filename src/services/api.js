/* eslint no-param-reassign: "error" */
import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://api-tvc-e1a8369f6cd8.herokuapp.com/',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // return Promise.reject(error);
    }
  },
);

export default api;
