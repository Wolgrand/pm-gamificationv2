import React from 'react';
import Nav from '../components/navGlobal';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <Nav />
    <ToastProvider>
      {children}
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
