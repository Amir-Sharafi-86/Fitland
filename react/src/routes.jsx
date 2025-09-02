// routes.jsx
import React from 'react'; 
import Index from './pages/Index';
import Dashboard from './pages/dashboard';
import Product from './pages/product/Product';
import Login from './pages/login/login';
import Notfound from './pages/notFount/notfound';
import Detailsprodcut from './pages/detailsProduct/detailsprodcut';
import Register from './pages/register/register';
import EditInfo from './pages/dashboard/editInfo';
import IndexPgaeUser from './pages/dashboard/indexPgaeUser/indexPgaeUser';
// import IndexUserPgae from './pages/dashboard';
const routes = [
  { path: '/', element: <Index /> },
  // { path: '/dashboard', element: <Dashboard /> },
  { path: '/Product', element: <Product /> },
  // { path: '*', element: <Notfound /> },
  { path: '*', element: <Notfound /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:productName', element: <Detailsprodcut /> },


   {
      path: "/my-account/*",
      element: <Dashboard />,
      children: [
            { path: "EditInfo", element: <EditInfo /> },
            { path: "", element: <IndexPgaeUser /> },
      ],
    },
];

export default routes;
