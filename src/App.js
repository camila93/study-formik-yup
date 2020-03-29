import React from 'react';
import { Link, Route, Router, browserHistory } from 'react-router'
import Register from './Register/Register';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Formulário</h1>
        <Link to="/register">Formulário de registros</Link>
      </div>

      <Router history={browserHistory}>
        <Route path="/register"> 
          <Register />
        </Route>
      </Router>
    </div>
  );
}

export default App
