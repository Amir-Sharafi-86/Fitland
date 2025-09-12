// routes.jsx
import React from 'react'; 
import Index from './pages/Index';
import IndexPage from './pages/dashboard';
// import In2dex from './pages/dashboard';
// import Dashboard from './pages/dashboard';
import Product from './pages/product/Product';
import Login from './pages/login/login';
import Notfound from './pages/notFount/notfound';
import Detailsprodcut from './pages/detailsProduct/detailsprodcut';
import Register from './pages/register/register';
import EditInfo from './pages/dashboard/editInfo';
import IndexPgaeUser from './pages/dashboard/indexPgaeUser/indexPgaeUser';




const routes = [
  { path: '/', element: <Index /> },
  { path: '/Product', element: <Product /> },
  { path: '*', element: <Notfound /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:productName', element: <Detailsprodcut /> },


   {
      path: "/my-account/*",
      element: <IndexPage />,
      children: [
            { path: "EditInfo", element: <IndexPgaeUser /> },
            { path: "", element: <EditInfo /> },
      ],
    },
];

export default routes;
