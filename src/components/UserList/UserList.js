import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Danh sách người dùng</div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Điện thoại</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
            </div>
        )
    } 
}

export default UserList;