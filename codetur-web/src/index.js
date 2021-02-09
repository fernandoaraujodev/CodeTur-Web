import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//libs
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import ResetarSenha from './pages/conta/resetarsenha';
import Login from './pages/conta/login';

const routing = (
  <Router>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/conta/resetar-senha' component={ResetarSenha} />
    </Switch>
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
