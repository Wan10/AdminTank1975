/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import Modals from "../Modals/Modals";
import { Button } from 'reactstrap';
import callApi from "../../utils/apiCaller";
import { withRouter } from 'react-router'

class DriverItem extends Component {


    onDelete = e => {
        // if(confirm('Bạn chắc chắn muốn xóa??')){ 
            this.props.onDelete(this.props.driver._id, this.props.driver.idMoto)
        // }
    }

    render() {
        var { driver, index } = this.props;
        var dateString = new Date(driver.birth).toUTCString();
        dateString = dateString.split(' ').slice(1, 4).join('-');
        return (
            <tr index={index}>
                <td>{index + 1}</td>
                <td>{driver.userName}</td>
                <td>{driver.email}</td>
                <td>{dateString}</td>
                <td>{driver.tel}</td>
                <td>{driver.address}</td>
                <td>
                    <Modals
                        key={index}
                        driver={driver}
                        index={index}
                        onSave={this.props.onSave}
                    />
                </td>
                <td>
                    <Button color="danger" onClick={this.onDelete}></Button>{' '}
                </td>
            </tr>
        );
    }

}

export default withRouter(DriverItem);