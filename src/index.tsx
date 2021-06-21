import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './state';
import { HashRouter as Router, Route } from "react-router-dom";
import DynamicData from './components/DynamicData';
import Graphs from './components/Graphs';
import Login from './components/Login';
import Dashboard from './components/Dashbaord';
import { useActions } from './hooks/use-actions';
import { ActionTypes } from './state';

if(localStorage.jwtTokenT) {
   store.dispatch({
        type: ActionTypes.authUser,
        payload: {
             isAuthenticated: true
        }
   })
}

ReactDOM.render(
    <Provider store={store}>
         <Router basename="/">
         <Route exact path="/" component={App} />
         <Route exact path = "/dynamic_data" component={DynamicData} />
         <Route exact path = "/statistics" component = {Graphs} />
         <Route exact path = "/login" component = {Login} />
         <Route exact path = "/dashboard" component = { Dashboard } />
         </Router>
    </Provider>,
    document.querySelector('#root'))