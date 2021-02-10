import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//libs
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications';
import jwt_decode from 'jwt-decode';

//Pages
import ResetarSenha from './pages/conta/resetarsenha';
import Login from './pages/conta/login';
import Pacotes from './pages/admin/pacotes';
import Dashboard from './pages/admin/dashboard';
import NotFound from './pages/notfound';

const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-codetur') !== null && jwt_decode(localStorage.getItem('token-codetur')).role === 'Admin' ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/', state :{from : props.location}}} />)
    }
  />
);

const rotas = (
  <Router>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/conta/resetar-senha' component={ResetarSenha} />
      <RotaPrivadaAdmin path='/admin'  component={Dashboard} />
      <RotaPrivadaAdmin path='/admin/pacote'  component={Pacotes} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <ToastProvider>  
    {rotas}
  </ToastProvider>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
