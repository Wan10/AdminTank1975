import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditProfileUser from "../EditProfile/EditProfileUser";
import callApi from "../../utils/apiCaller";


class ModalsUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        objUser: {
        }
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getValueFromModelUser = (objUser) => {
    if(objUser !== undefined)  Object.assign(this.state.objUser, objUser);
  }

  onSave = () => {
    console.log(this.state.objUser);
    callApi('admin/adminchangeinforuser', 'POST' , {
      objUser: this.state.objUser
    }).then(res=> console.log(res))
    this.props.onChange(this.state.objUser);
    this.toggle();
  }
  render() {
    const {user, index} = this.props;
    return (
      <div>
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="xl">
          <ModalHeader toggle={this.toggle}>Edit Profile</ModalHeader>
          <ModalBody>
            <EditProfileUser
              user={user}
              index={index}
              getValueFromModelUser = {this.getValueFromModelUser}
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

export default ModalsUser;