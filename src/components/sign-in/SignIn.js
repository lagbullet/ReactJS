import React from 'react';
import Input from '../input';

class SignIn extends React.Component {
  state = {
    validEmail: false,
    validPassword: false,
  };

  isValidEmail = ({ target: { value } }) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState(() => ({
      validEmail: re.test(value),
    }));
  };

  isValidPassword = ({ target: { value } }) => {
    let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.setState(() => ({
      validPassword: re.test(value),
    }));
  };

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <Input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.isValidEmail}
            label="Email address"
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.isValidPassword}
            lable="Password"
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
