import React, { Component } from "react";
import { Grid, Row, Col, Table, Pagination } from "react-bootstrap";

import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import DriverItem from "../../components/DriverItem/DriverItem";
import { thArray, tdArray } from "../../variables/Variables";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";

class DriversListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: []
    };
  }

  onDelete = (idDriver, idMoto) => {
    var { drivers } = this.state;
    callApi('admin/admindel', 'POST', {
      idDriver: idDriver,
      idMoto: idMoto
    }).then(res => {
      // console.log(res);
      if (res.status === 200) {
        var index = this.findIndex(drivers, idDriver);
        if (index !== -1) {
          drivers.splice(index, 1);
          this.setState({
            drivers: drivers
          });
        }
      }
    })
  }

  findIndex = (drivers, idDriver) => {
    var result = -1;
    drivers.forEach((driver, index) => {
      if (driver._id === idDriver) result = index;
    })
    return result;
  }

  onSave = (idDriver, objDriver, objMoto) => {
    // console.log(objDriver);
    // console.log(objMoto);
    var { drivers } = this.state;
    var index = this.findIndex(drivers, idDriver);
    if (index !== -1) {
      Object.assign(drivers[index], objDriver);
      this.setState({
        drivers: drivers
      })
    }
  }

  componentDidMount() {
    callApi('driver', 'GET', null).then(res => {
      this.setState({
        drivers: res.data
      })
    });
  }

  render() {
    var { drivers } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Driver List"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.showDrivers(drivers)}
                    </tbody>
                    {this.showPaPagination(5)}
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  showDrivers(drivers) {
    var result = null;
    if (drivers.length > 0) {
      result = drivers.map((driver, index) => {
        return (
          <DriverItem
            key={index}
            driver={driver}
            index={index}
            onDelete={this.onDelete}
            onSave={this.onSave}
          />
        );
      });
    }
    return result;
  }

  showPaPagination(numDes) {
    let active = 2;
    let items = [];
    for (let number = 1; number <= numDes; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    return (
      <Pagination>{items}</Pagination>
    );

  }

}

const mapStateToProps = state => {
  return {
    drivers: state.drivers
  }
}

export default connect(mapStateToProps, null)(DriversListPage);
