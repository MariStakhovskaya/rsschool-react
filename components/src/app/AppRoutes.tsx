import { Route, Routes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Main from 'pages/main/Main';
import About from 'pages/About/About';
import Forms from 'pages/forms/Forms';
import ErrorPage from 'pages/Error/ErrorPage';

import React from 'react';

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
      element: <Forms />,
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
