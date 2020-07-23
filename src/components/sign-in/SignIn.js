import React from 'react';
import Input from '../input';

class SignIn extends React.Component {
  state = {
    validEmail: false,
    validPassword: false,
  };

  required = (value) => {
    return (value?.length || 0) === 0 ? false : true;
  };

  validEmail = (value) => {
    this.setState(() => ({ validEmail: value }));
  };

  validPassword = (value) => {
    this.setState(() => ({ validPassword: value }));
  };

  isValidEmail = (value) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

  isValidPassword = (value) => {
    let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(value);
  };

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <Input
            type="email"
            validation={[this.required, this.isValidEmail]}
            onValid={this.validEmail}
            className="form-control"
            placeholder="Enter email"
            label="Email address"
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            validation={[this.required, this.isValidPassword]}
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
        >
          Submit
        </button>
      </form>
    );
  }
}

export default SignIn;
