import React from 'react';
import Routes from './routes'
import Global from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
