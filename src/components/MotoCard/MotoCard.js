import React, { Component } from "react";
import {
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Table
} from "react-bootstrap";

import { SmallModals } from '../Modals/SmallModals';

export class MotoCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            motoMaker: '',
            numPlate: '',
            color: '',
            type: '',
        };
    }

    onChangeMotoMaker = (newinfo) =>{
        this.setState({
            motoMaker : newinfo
        })
    }
    onChangeMotoNumPlate = (newinfo) =>{
        this.setState({
            numPlate : newinfo
        })
    }
    onChangeMotoColor = (newinfo) =>{
        
        this.setState({
            color : newinfo
        })
    }
    onChangeMotoType = (newinfo) =>{
        
        this.setState({
            type : newinfo
        })
    }
    render() {
        var {motoMaker, numPlate, color, type} = this.state;
        var {bgImage, description} = this.props; 
        if( motoMaker === undefined || motoMaker === '') motoMaker = this.props.motoMaker;
        if( numPlate === undefined || numPlate === '') numPlate = this.props.numPlate;
        if( color === undefined || color === '') color = this.props.color;
        if( type === undefined || type === '') type = this.props.type;

        this.props.getValueMotoCard({
            bgImage,
            motoMaker,
            numPlate, 
            color,
            type, 
            description });

        return (
            <div className="card card-user" title="Moto Infor">
                <div className="header">
                    <h5 callsName="title">Moto information</h5>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={bgImage} alt="..." />
                    </div>
                    <Table size="sm">
                        <tbody>
                           <tr>
                                <th><label>Model:</label></th>
                                <td>{motoMaker}</td>
                                <td><SmallModals 
                                    name = "motoMaker"
                                    value={motoMaker}
                                    title="Model"
                                    changeMotoInfo = {this.onChangeMotoMaker}
                                /></td>
                           </tr>
                           <tr>
                                <th><label>Plate number:</label></th>
                                <td>{numPlate}</td>
                                <td><SmallModals 
                                    name = "numPlate"
                                    value={numPlate} 
                                    title="Plate number"
                                    changeMotoInfo = {this.onChangeMotoNumPlate}
                                /></td>
                           </tr>
                           <tr>
                                <th><label>Color:</label></th>
                                <td>{color}</td>
                                <td><SmallModals 
                                    name = "color"
                                    value={color}
                                    title="Color"
                                    changeMotoInfo = {this.onChangeMotoColor}
                                /></td>
                           </tr>
                           <tr>
                                <th><label>Type:</label></th>
                                <td>{type}</td>
                                <td><SmallModals 
                                    name = "type"
                                    value={type}
                                    title="Type"
                                    changeMotoInfo = {this.onChangeMotoType}
                                /></td>
                           </tr>
                        </tbody>
                    </Table>
                    <Row>
                        <Col md={12}>
                            <FormGroup controlId="description formControlsTextarea">
                                <ControlLabel>Description moto</ControlLabel>
                                <FormControl
                                    rows="5"
                                    componentClass="textarea"
                                    bsClass="form-control"
                                    placeholder="Here can be your description"
                                    value={description}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default MotoCard;
