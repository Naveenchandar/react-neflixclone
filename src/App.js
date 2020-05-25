import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './Pages/index';

function App() {
  return (
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  );
}

export default App;
