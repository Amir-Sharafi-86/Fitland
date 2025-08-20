// routes.jsx
import React from 'react'; 
import Index from './pages/Index';
import Dashboard from './pages/dashboard/dashboard';
import Product from './pages/product/Product';
import Login from './pages/login/login';
const routes = [
  { path: '/', element: <Index /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/Product', element: <Product /> },
  { path: '/login', element: <Login /> },
];

export default routes;
