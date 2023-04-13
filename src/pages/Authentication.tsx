import { ChangeEvent, useState } from 'react';

import { useLogin, useRegister } from '@/queries/useAuth';
import { LoginCredentials, RegisterCredentials } from '@/queries/types';

export const Authentication = () => {
  const [mode, setMode] = useState<'register' | 'login'>('register');

  return (
    <div>
      {mode === 'login' && (
        <>
          <LoginForm />
          <button onClick={() => setMode('register')}>Register</button>
        </>
      )}
      {mode === 'register' && (
        <>
          <RegisterForm />
          <button onClick={() => setMode('login')}>Login</button>
        </>
      )}
    </div>
  );
};

const RegisterForm = () => {
  const initialCredentials = {
    username: '',
    email: '',
    password: '',
  };

  const [credentials, setCredentials] =
    useState<RegisterCredentials>(initialCredentials);
  const register = useRegister();

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: event.target.value,
    }));

  return (
    <form
      title="Register"
      onSubmit={(e) => {
        e.preventDefault();
        register.mutate(credentials, {
          onSuccess: () => console.log('registered'),
        });
      }}
    >
      <input
        placeholder="email"
        name="email"
        type="email"
        onChange={onChange}
      />
      <input placeholder="username" name="username" onChange={onChange} />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={onChange}
      />
      <button disabled={register.isLoading} type="submit">
        Submit
      </button>
    </form>
  );
};

const LoginForm = () => {
  const initialCredentials = {
    user: {
      email: '',
      password: '',
    },
  };

  const [credentials, setCredentials] =
    useState<LoginCredentials>(initialCredentials);
  const login = useLogin();

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCredentials((credentials) => ({
      user: {
        ...credentials.user,
        [event.target.name]: event.target.value,
      },
    }));

  return (
    <form
      title="Login"
      onSubmit={(e) => {
        e.preventDefault();
        login.mutate(credentials);
      }}
    >
      <input
        placeholder="email"
        name="email"
        type="email"
        onChange={onChange}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={onChange}
      />
      <button disabled={login.isLoading} type="submit">
        Submit
      </button>
    </form>
  );
};
