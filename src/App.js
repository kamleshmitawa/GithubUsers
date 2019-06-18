import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { MainRouter } from './Components/Router/MainRouter';
import { Store } from './Store';

function App() {
  return (
      <Provider store={Store}>
          <MainRouter />
      </ Provider>  
  );
}

export default App;
