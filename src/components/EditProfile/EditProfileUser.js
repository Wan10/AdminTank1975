/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import  Maps  from "../Map/Maps"
import { Card } from "../Card/Card";
import { UserCard } from "../UserCard/UserCard";
import avatar from "../../assets/img/faces/face-3.jpg";
// eslint-disable-next-line no-unused-vars
import callApi from "../../utils/apiCaller";


class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objUser: {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        tel: '',
        birth: '',
        address: '',
        aboutMe: ''
      }
    }
  }

  componentWillMount() {
    Object.assign(this.state.objUser, this.props.user);
  }

 
  handleChange(event) {
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    this.setState({ objUser: { ...this.state.objUser, [fieldName]: fieldVal } })
  }

  render() {
    var { userName, email, tel, address, firstName, lastName, birth, aboutMe} = this.state.objUser ;
    this.props.getValueFromModelUser(this.state.objUser);

    
    var dateString = new Date(birth).toUTCString();
    dateString = dateString.split(' ').slice(1, 4).join('-');
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <ControlLabel>Username</ControlLabel>
                          <FormControl
                            name="userName"
                            label="Username"
                            type="text"
                            bsClass="form-control"
                            placeholder={userName}
                            value={userName}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <ControlLabel>Email Adress</ControlLabel>
                          <FormControl
                            name="email"
                            label="Email address"
                            type="email"
                            bsClass="form-control"
                            placeholder={email}
                            value={email}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <ControlLabel>First name</ControlLabel>
                          <FormControl
                            name="firstName"
                            label="First name"
                            type="text"
                            bsClass="form-control"
                            placeholder="First name"
                            defaultValue ="First name"
                            value={firstName}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <ControlLabel>Last name</ControlLabel>
                          <FormControl
                            name="lastName"
                            label="Last name"
                            type="text"
                            bsClass="form-control"
                            placeholder="Last name"
                            defaultValue ="Last name"
                            value={lastName}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <ControlLabel>Phone</ControlLabel>
                          <FormControl
                            name="tel"
                            label="Phone"
                            type="text"
                            bsClass="form-control"
                            placeholder="Phone number"
                            value={tel}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <ControlLabel>Birthday</ControlLabel>
                          <FormControl
                            name="birth"
                            label="Birthday"
                            type="text"
                            bsClass="form-control"
                            placeholder="Birthday"
                            disabled="true"
                            value={dateString}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Col md={12}>
                      <FormGroup>
                        <ControlLabel>Address</ControlLabel>
                        <FormControl
                          name="address"
                          label="Address"
                          type="text"
                          bsClass="form-control"
                          placeholder={address}
                          value={address}
                          onChange={this.handleChange.bind(this)}
                        />
                      </FormGroup>
                    </Col>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            name="aboutMe"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            value={aboutMe}
                            onChange={this.handleChange.bind(this)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                avatar={avatar}
              />
              <Card
                title = "Location"
                content = {
                  <Maps/>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default EditProfile;
