import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pages } from '../../components';

class LogInPage extends Component {
  render() {
    return <Pages.LogInPage
      dispatch={this.props.dispatch}
      auth={this.props.auth}
    />;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LogInPage);
