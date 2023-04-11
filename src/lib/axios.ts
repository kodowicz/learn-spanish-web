import Axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axios.interceptors.response.use((response) => {
  return response.data;
});
