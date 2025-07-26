// routes.jsx
import React from 'react'; 
import Index from './pages/Index';
import Dashboard from './pages/dashboard/dashboard';
import ProductInfo from './pages/productInfo/ProductInfo';

const routes = [
  { path: '/', element: <Index /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/Product-Info/:productName', element: <ProductInfo /> },
];

export default routes;
