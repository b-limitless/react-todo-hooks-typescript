import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './state';
import { HashRouter as Router, Route } from "react-router-dom";
import DynamicData from './components/DynamicData';
import Graphs from './components/Graphs';
ReactDOM.render(
    <Provider store={store}>
         <Router basename="/">
         <Route exact path="/" component={App} />
         <Route exact path = "/dynamic_data" component={DynamicData} />
         <Route exact path = "/statistics" component = {Graphs} />
         </Router>
    </Provider>,
    document.querySelector('#root'))