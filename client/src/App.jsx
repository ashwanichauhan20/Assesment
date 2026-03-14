import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/login",
    element: localStorage.getItem('user') ? <Navigate to="/dashboard" /> : <Login />
  },
  {
    path: "/signup",
    element: localStorage.getItem('user') ? <Navigate to="/dashboard" /> : <Signup />
  },
  {
    path: "/dashboard",
    element: localStorage.getItem('user') ? <Dashboard /> : <Navigate to="/login" />
  },
  {
    path: "/",
    element: <Navigate to="/login" />
  }
], {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  }
});

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

export default App;
