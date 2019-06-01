import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarBrand,
} from 'reactstrap';

const tabs = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lý người dùng',
    to: '/user-list',
    exact: false
  }
];

const tabLink = ({ label, to, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}

class AppNavbar extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor() {
    super();
    this.state = { term: '', searchResult: {}, isOpen: false };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Trang chủ</NavbarBrand>
            <NavbarBrand href="/user-list">Quản lý người dùng</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  showTabs = (tabs) => {
    var result = null;
    if(tabs.length > 0) {
      result = tabs.map((tab, index ) => {
        return (
          <tabLink
            key = {index}
            label = {tab.label}
            to = {tab.to}
            exact = {tab.exact}
          />
        );
      })
    }

    return result;
  }
}

export default AppNavbar;