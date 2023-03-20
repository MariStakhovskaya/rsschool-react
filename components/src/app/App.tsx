import About from 'pages/about/About';
import ErrorPage from 'pages/error/ErrorPage';
import Main from 'pages/main/Main';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from 'widgets/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
