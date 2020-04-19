import React from 'react';
import ReactDOM from 'react-dom';
import "./CSS/index.css"
import './CSS/Navbar.css'
import "./CSS/Sidebar.css"
import "./CSS/Login.css"
import "./CSS/footer.css"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.css"
import "font-awesome/css/font-awesome.css"
import Loginpage from './Component/Login'
import Contactus from './Component/Contactus'
import Dashboard from './Component/Admin/Dashboard'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/Contactus" component={Contactus} />
            <Route path="/login" component={Loginpage} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={App} />
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
