import React from 'react';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
