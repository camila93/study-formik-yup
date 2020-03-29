import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Register from './Register/Register';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Formulário</h1>
      </div>
      <div>
        <Router>
          <Link to="/register" >Registros</Link>
          <Route path="/register" component={Register} />
        </Router>
      </div>
    </div>
  );
}

export default App
