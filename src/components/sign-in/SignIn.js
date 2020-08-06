import React from 'react';
import Input from '../input';
import { required, isValidEmail, isValidPassword } from '../../validation';
import { logIn } from '../redux/actions/authorization';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  state = {
    validEmail: false,
    validPassword: false,
  };

  validEmail = (value, email) => {
    this.setState(() => ({ validEmail: value, username: email }));
  };

  validPassword = (value, password) => {
    this.setState(() => ({ validPassword: value, password: password }));
  };

  signIn = () => {
    this.props.logIn(this.state.username, this.state.password);
    this.props.history.push('/');
  };

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <Input
            type="email"
            validation={[required, isValidEmail]}
            onValid={this.validEmail}
            className="form-control"
            placeholder="Enter email"
            label="Email address"
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            validation={[required, isValidPassword]}
            onValid={this.validPassword}
            className="form-control"
            placeholder="Enter password"
            label="Password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={!(validEmail && validPassword)}
          onClick={this.signIn}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  logIn,
};

export default connect(null, mapDispatchToProps)(SignIn);
