import About from 'pages/About/About';
import ErrorPage from 'pages/Error/ErrorPage';
import Forms from 'pages/forms/Forms';
import Main from 'pages/main/Main';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from 'widgets/Header/Header';
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
        <Route path="/forms" element={<Forms />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
