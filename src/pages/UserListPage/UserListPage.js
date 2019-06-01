import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import UserItem from "../../components/UserItem/UserItem";
import { thUserArr } from "../../variables/Variables";
import callApi from "../../utils/apiCaller";

class UserListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  onDelete = idUser => {
    var { users } = this.state;
    callApi(`admin/admindeluser/${idUser}`, 'GET', null).then(res => {
      var index = this.findIndex(users, idUser);
      if(index !== -1) {
        users.splice(index, 1);
        this.setState({
          users: users
        })
      }
    })
  }

  findIndex = (users, idUser) => {
    var result = -1;
    users.forEach((user, index) => {
      if (user._id === idUser) result = index;
    })
    return result;
  }

  componentDidMount() {
    callApi('user', 'GET', null).then(res => {
      this.setState({
        users: res.data
      })
    });
  }

  render() {
    // var {users} = this.props;
    var { users } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Users List"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thUserArr.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.showUsers(users)}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  showUsers(users) {
    var result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return (
          <UserItem
            key={index}
            user={user}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UserListPage);