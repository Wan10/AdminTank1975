import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/light-bootstrap-dashboard-react.css";
import AdminLayout from "./layouts/Admin";
import store from './store';
// import thunk from 'redux-thunk';

// const store = createStore(
//     appReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
// );


ReactDOM.render(
    // <Provider store = {store}>
    //     <App />
    // </Provider>,
    <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin" />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// serviceWorker.unregister();
