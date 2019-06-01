import React, { Component } from 'react';
import { Button } from "reactstrap";
import ModalsUser from "../Modals/ModalsUser";

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            idUser: ''
        }
    }

    componentWillMount() {
        Object.assign(this.state.user, this.props.user);
    }

    onDelete = e => {
        this.props.onDelete(this.state.idUser);
    }

    onChange = (objUser) => {
        this.setState({
            user:  objUser
        })
    }

    render() {
        var { index } = this.props;
        var { user } = this.state;
        this.state.idUser = this.props.user._id;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.tel}</td>
                <td>
                    <ModalsUser
                        user={user}
                        index={index}
                        onChange={this.onChange}
                    />
                </td>
                <td>
                    <Button color='danger' onClick={this.onDelete}></Button>
                </td>
            </tr>
        );
    }
}

export default UserItem;