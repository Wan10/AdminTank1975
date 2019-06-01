/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

import { Card } from "../Card/Card";
import { FormInputs } from "../FormInputs/FormInputs";
import { UserCard } from "../UserCard/UserCard";
import { MotoCard } from "../MotoCard/MotoCard";

import avatar from "../../assets/img/faces/face-3.jpg";
import { connect } from "react-redux";


import callApi from "../../utils/apiCaller";


class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objDriver: {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        tel: '',
        birth: '',
        address: '',
        aboutMe: ''
      },
      moto: [],
      objMoto: {
        idMoto:'',
        bgImage: '',
        motoMaker: '',
        numPlate: '',
        color: '',
        description: ''
      }
    }
    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    }
  }
  // Get value use Callback Refs -- {this.setTextInputRef.bind(this)} assign this.textInput is Oject element( FormGroup )
  // use 3 loop for object
  getValueEditProfile = () => {
    let objDriver = Object.assign({}, this.state.objDriver)
    if (this.textInput !== null) {
      this.textInput.props.children.forEach(element => {
        element.props.properties.forEach(item => {
          for (var key in objDriver) {
            if (!objDriver.hasOwnProperty(key)) continue;
            if (key === item.name && objDriver[key] === '') {
              objDriver[key] = (item.value !== undefined) ? item.value : objDriver[key];
            }
          }
        });
      })
    }

    this.state.objDriver = objDriver;
  }

  componentDidMount() {
    callApi(`moto/${this.props.driver.idMoto}`, 'GET', null).then(res => {
      this.setState({
        moto: res.data.moto
      });
    });
  }

  getValueMotoCard = (obj) => {
    let objMoto = Object.assign({}, this.state.objMoto);
    objMoto.idMoto = this.state.moto.idMoto;
    objMoto.bgImage = (obj.bgImage !== undefined) ? obj.bgImage : '';
    objMoto.motoMaker = (obj.motoMaker !== undefined) ? obj.motoMaker : '';
    objMoto.numPlate = (obj.numPlate !== undefined) ? obj.numPlate : '';
    objMoto.color = (obj.color !== undefined) ? obj.color : '';
    objMoto.type = (obj.type !== undefined) ? obj.type : '';
    objMoto.description = (obj.description !== undefined) ? obj.description : '';
    this.state.objMoto = objMoto;

    this.props.getValueFromEditProfile(this.state.objDriver, this.state.objMoto)
    // console.log(this.state.objDriver);
  }

  handleChange(event) {
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    this.setState({ objDriver: { ...this.state.objDriver, [fieldName]: fieldVal } })
  }

  render() {
    var moto = this.state.moto;
    var { driver, index } = this.props;
    var { userName, email, firstName, lastName, tel, birth, address, aboutMe } = this.state.objDriver;

    var dateString = new Date(driver.birth).toUTCString();
    dateString = dateString.split(' ').slice(1, 4).join('-');

    this.state.objDriver.userName = (userName === '' || userName === driver.userName) ? driver.userName : userName;
    this.state.objDriver.email = (email === '' || email === driver.email) ? driver.email : email;
    this.state.objDriver.firstName = (firstName === '' || firstName === driver.firstName) ? driver.firstName : firstName;
    this.state.objDriver.lastName = (lastName === '' || lastName === driver.lastName) ? driver.lastName : lastName;
    this.state.objDriver.tel = (tel === '' || tel === driver.tel) ? driver.tel : tel;
    this.state.objDriver.birth = (birth === '' || birth === dateString) ? dateString : birth;
    this.state.objDriver.address = (address === '' || address === driver.address) ? driver.address : address;
    this.state.objDriver.aboutMe = (aboutMe === '' || aboutMe === driver.aboutMe) ? driver.aboutMe : aboutMe;

    // console.log(this.state.objDriver);

    // this.getValueEditProfile();
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    {/* <FormGroup ref={this.setTextInputRef.bind(this)}> */}
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
                            value={birth}
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
                    {/* </FormGroup> */}
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
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
              />
              <MotoCard
                bgImage="https://cdn.ictnews.vn/_Files/2018/02/16/bmw_s1000rr_fullcarbon_zing_9.jpg"
                motoMaker={moto.motoMaker}
                numPlate={moto.numPlate}
                color={moto.color}
                type={moto.type}
                description={moto.description}
                getValueMotoCard={this.getValueMotoCard.bind(this)}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moto: state.moto
  };
}

export default connect(mapStateToProps, null)(EditProfile);
