import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditProfile from "../EditProfile/EditProfile";
import callApi from "../../utils/apiCaller";


class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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
      objMoto: {
        bgImage: '',
        motoMaker: '',
        numPlate: '',
        color: '',
        type: '',
        description: ''
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  
  getValueFromEditProfile = (objDriver, objMoto) => {
    if(objDriver !== undefined)  this.state.objDriver = Object.assign({}, objDriver);
    if(objMoto !== undefined)  this.state.objMoto = Object.assign({}, objMoto);
  }

  onSave = e =>{
    e.preventDefault();
    var { objDriver, objMoto } = this.state;
    // console.log(this.state.objDriver);
    // console.log(this.state.objMoto);
    callApi('driver/adminchangeinfo', 'POST', {
      idDriver: this.props.driver._id,
      userName: objDriver.userName, 
      email: objDriver.email, 
      firstName: objDriver.firstName, 
      lastName: objDriver.lastName, 
      birth: objDriver.birth, 
      tel: objDriver.tel, 
      address: objDriver.address, 
      aboutMe:objDriver.aboutMe,
      idMoto: objMoto.idMoto,
      image: objMoto.bgImage,
      numPlate: objMoto.numPlate,
      color: objMoto.color,
      motoMaker: objMoto.motoMaker,
      type: objMoto.type,
      description: objMoto.description
    }).then(res => {
      if(res.status === 200)
      {
        this.props.onSave(this.props.driver._id, objDriver, objMoto);
      }
    })
    this.toggle();
  }

  render() {
    var { driver, index } = this.props;

    return (
      <div>
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="xl">
          <ModalHeader toggle={this.toggle}>Edit Profile</ModalHeader>
          <ModalBody>
            <EditProfile
              key={index}
              driver={driver}
              index={index}
              getValueFromEditProfile = {this.getValueFromEditProfile}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSave}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modals;