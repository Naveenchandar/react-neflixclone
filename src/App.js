import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './Pages/index';
import SignIn from './Components/SignIn';


function App() {
  return (
    <Switch>
      {/* <Route path='/login' component={SignIn} /> */}
      <Route path='/' component={Main} />
    </Switch>
  );
}

export default App;
