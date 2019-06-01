import React, { Component } from 'react';
import AppNavbar from './components/Nav/Nav';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppNavbar />
        <div className="container">
          {this.showContentMenus(routes)}
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return(
          <Route 
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
        );
      });
    }
    return <Switch> {result} </Switch>
  }
}
export default App;
