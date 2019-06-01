import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";

import routes from "../routes";
import image from "../assets/img/sidebar-3.jpg";
import LogInPage from "../pages/LogInPage/LogInPage";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _notificationSystem: null,
            image: image,
            color: "black",
            hasImage: true,
            fixedClasses: "dropdown show-dropdown open",
            statusLogin: false
        };
        let token = null;
        const user = JSON.parse(localStorage.getItem('user'));
        token = (user !== null) ? user.token : token;
        if( token !== null)  {
            this.state.statusLogin = true;
            // this.setState({

            //     statusLogin: true
            // })
        }
    }
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                                handleClick={this.handleNotificationClick}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return (null);
            }
        });
    };

    onSetStatusLoginState = e =>{
        this.setState({
            statusLogin : e
        })
    }

    onLoginAdmin = () => {
        if(this.state.statusLogin){
            return (
                <div className="wrapper">
                    <Sidebar {...this.props} routes={routes} image={this.state.image} color={this.state.color} hasImage={this.state.hasImage} />
                    <div id="main-panel" className="main-panel" ref="mainPanel">
                        <AdminNavbar
                            {...this.props} brandText={this.getBrandText(this.props.location.pathname)}
                        />
                        <Switch>{this.getRoutes(routes)}</Switch>
                    </div>
                </div>
            );
        } else {
            return ( 
                <LogInPage 
                    onSetStatusLoginState = {this.onSetStatusLoginState}
                />
             );
        }
    }

    render() {
        return (
            this.onLoginAdmin()
        );
    };
}

export default Admin;