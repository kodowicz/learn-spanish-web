import { configureAuth } from 'react-query-auth';

import { axios } from '@/lib/axios';
import {
  Author,
  LoginCredentials,
  RegisterCredentials,
  ResponseError,
} from './types';

function userFn(): Promise<Author> {
  return axios.get('/api/v1/users/profile');
}

function registerFn(credentials: RegisterCredentials): Promise<Author> {
  return axios.post('/api/v1/users/sign_up', credentials);
}

function loginFn(credentials: LoginCredentials): Promise<Author> {
  return axios.post('/api/v1/users/sign_in', credentials);
}

function logoutFn() {
  return axios.delete('/api/v1/users/sign_out');
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth<
  Author,
  ResponseError,
  LoginCredentials,
  RegisterCredentials
>({
  userFn,
  registerFn,
  loginFn,
  logoutFn,
});
