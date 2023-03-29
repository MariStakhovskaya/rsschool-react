import React from 'react';

import Header from 'widgets/Header/Header';

import AppRoutes from './AppRoutes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
