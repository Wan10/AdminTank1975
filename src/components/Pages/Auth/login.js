import React from 'react';
import PropTypes from 'prop-types';
import TextInputGroup from './TextInputGroup';
import { login } from '../../../actions/auth';
import { withRouter } from 'react-router-dom';
import './index.css';

class LogInPage extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  state = {
    animate: false,
    email: '',
    password: '',
  };

  componentDidMount() {
    this.setState({
      animate: true,
      leave: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.authenticated) {
      this.setState({ leave: true });
      // setTimeout(() => {
      //   // this.props.dispatch(slideInRight()); // UI action
      //   // this.contextTypes.router.push('/admin/users');
      //   this.props.history.push('/admin/users');
      // }, 0);
    }
  }

  goToSignUpPage(e) {
    // e.preventDefault();
    // this.setState({ leave: true });
    // setTimeout(() => {
    //   this.context.router.push('/signup');
    // }, 700);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.dispatch(login({ email, password }, this.props.history));
    // this.props.history.push('/admin/users');
  }

  renderAuthBox() {
    const className = `auth-box animated ${this.state.animate &&
      (this.state.leave ? 'bounceOutLeft' : 'bounceInRight')}`;
    const errors = this.props.auth.errors;

    return (
      <div className={className}>
        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              title="Email"
              placeholder="Email"
              name="email"
              error={errors.data}
              onChange={this.onChange.bind(this)}

            />
            <TextInputGroup
              placeholder="Password"
              name="password"
              type="password"
              error={errors.data}
              onChange={this.onChange.bind(this)}
            />
            <button type="submit" id="sign_up" >
              {!this.props.auth.isProcessing ? 'Log In' : '...Processing'}
            </button>
          </form>
        </div>
        <footer className="login-footer">
          {/* New here, <a href="#" onClick={this.goToSignUpPage.bind(this)}>Create an account</a> */}
        </footer>
      </div>
    );
  }

  render() {
    return (
      <div className="auth">
        <div className="auth-box-wrapper">
          {this.renderAuthBox()}
        </div>
      </div>
    );
  }
}

LogInPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    isProcessing: PropTypes.bool,
  }),
};

export default withRouter(LogInPage);


