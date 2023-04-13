import { ChangeEvent, useState } from 'react';

import { LoginCredentials } from '@/queries/types';
import { useLogin } from '@/queries/useAuth';

export function Login() {
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
