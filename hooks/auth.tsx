import { NextComponentType } from 'next';
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../utils/services/api';

interface User {
  _id: string;
  name: string,
  department: string,
  company: string,
  email: string,
  password?: string,
  position: number,
  score: number,
  role: 'Jogador' | 'PMO',
  rewards: string[],
  criterias: string[],
  achievements: string[]
}


interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {

    if (typeof window !== "undefined") {
    const token = localStorage.getItem('@pm-gamification:token');
    const user = localStorage.getItem('@pm-gamification:user');


      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, user: JSON.parse(user) };
      }

    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('api/auth/session', {
      email,
      password,
    });

    const { token, userWithoutPassword } = response.data;

    const user = userWithoutPassword

    localStorage.setItem('@pm-gamification:token', token);
    localStorage.setItem('@pm-gamification:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@pm-gamification:token');
    localStorage.removeItem('@pm-gamification:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@pm-gamification:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
