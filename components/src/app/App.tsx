import React from 'react';
import './App.css';
import Header from 'widgets/header/Header';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
