import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/login/login.component';
import Dashboard from '../components/dashboard/dashboard.component';

const AppRoutes = () => (
  <Routes>
    <Route path='/'
      element={<Navigate to = '/login' replace/>}
    />
    <Route path='/logIn'
      element={<Login/>}
    />
    <Route path='/dashboard'
      element={<Dashboard/>}
    />
  </Routes>
);

export default AppRoutes;