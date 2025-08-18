// routes.jsx
import React from 'react'; 
import Index from './pages/Index';
import Dashboard from './pages/dashboard/dashboard';
import Product from './pages/product/Product';

const routes = [
  { path: '/', element: <Index /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/Product', element: <Product /> },
];

export default routes;
