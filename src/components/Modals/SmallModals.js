import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Label,
    FormGroup,
    Input,
    Col
} from 'reactstrap';

export class SmallModals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            txtmotoInfo: ''
        };
        this.toggleNested = this.toggleNested.bind(this);
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        this.props.changeMotoInfo(this.state.txtMotoInfo);
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    render() {
        var { txtMotoInfo } = this.state;
        return (
            <ModalBody>
                <Button color="success" onClick={this.toggleNested} size="sm"></Button>
                <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined} scrollable="fasle">
                    <ModalHeader>Edit {this.props.title}</ModalHeader>
                    <Form>
                        <FormGroup row>
                            <ModalBody>
                                <Label for="info" sm={4}>{this.props.title}</Label>
                                <Col sm={12}>
                                    <Input 
                                    type="text" 
                                    name="txtMotoInfo" 
                                    id="info" 
                                    placeholder={this.props.value} 
                                    value={txtMotoInfo}
                                    onChange={this.onChange}
                                    />
                                </Col>
                            </ModalBody>
                        </FormGroup>
                            <ModalFooter>
                                <Button color="primary" onClick={this.onSave}>Save</Button>
                                <Button color="secondary" onClick={this.toggleNested}>Done</Button>{' '}
                            </ModalFooter>
                    </Form>
                </Modal>
            </ModalBody>
        );

    }
}

export default SmallModals;