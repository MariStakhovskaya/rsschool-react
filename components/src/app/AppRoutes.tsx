import { Route, Routes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Main from 'pages/main/Main';
import About from 'pages/about/About';
import ErrorPage from 'pages/error/ErrorPage';

import React from 'react';
import Form from 'pages/forms/Form';

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/forms',
      element: <Form />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, key) => (
        <Route path={route.path} element={route.element} key={key} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
