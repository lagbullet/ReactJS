import React from 'react';

const SignIn = () => (
  <form>
    <h3>Sign In</h3>

    <div className="form-group">
      <label>Username</label>
      <input type="username" className="form-control" placeholder="Enter username" />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <button type="submit" className="btn btn-primary btn-block">
      Submit
    </button>
  </form>
);

export default SignIn;
