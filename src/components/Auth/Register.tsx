import { ChangeEvent, useState } from 'react';

import { RegisterCredentials } from '@/queries/types';
import { useRegister } from '@/queries/useAuth';

export function Register() {
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
}
