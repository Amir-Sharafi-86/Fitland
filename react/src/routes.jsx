// routes.jsx
import React from 'react'; 
import Index from './pages/Index';
import Dashboard from './pages/dashboard/dashboard';
import Product from './pages/product/Product';
import Login from './pages/login/login';
import Notfound from './pages/notFount/notfound';
import Detailsprodcut from './pages/detailsProduct/detailsprodcut';
const routes = [
  { path: '/', element: <Index /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/Product', element: <Product /> },
  { path: '*', element: <Notfound /> },
  { path: '*', element: <Notfound /> },
  { path: '/login', element: <Login /> },
  { path: '/Detailsprodcut', element: <Detailsprodcut /> },
];

export default routes;
