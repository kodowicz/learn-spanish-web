import { configureAuth } from 'react-query-auth';

import { axios } from '@/lib/axios';
import { LoginCredentials, RegisterCredentials } from './types';

function userFn(id: unknown) {
  return axios.get(`/api/v1/users/${id}`);
}

function registerFn(credentials: RegisterCredentials) {
  return axios.post('/api/v1/users/sign_up', credentials);
}

function loginFn(credentials: LoginCredentials) {
  return axios.post('/api/v1/users/sign_in', credentials);
}

function logoutFn() {
  return axios.delete('/api/v1/users/sign_out');
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn,
  registerFn,
  loginFn,
  logoutFn,
});
