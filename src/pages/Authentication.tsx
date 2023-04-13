import { useState } from 'react';

import { Login } from '@/components/Auth/Login';
import { Register } from '@/components/Auth/Register';

export function Authentication() {
  const [mode, setMode] = useState<'register' | 'login'>('register');

  return (
    <div>
      {mode === 'login' && (
        <>
          <Login />
          <button onClick={() => setMode('register')}>Register</button>
        </>
      )}
      {mode === 'register' && (
        <>
          <Register />
          <button onClick={() => setMode('login')}>Login</button>
        </>
      )}
    </div>
  );
};
