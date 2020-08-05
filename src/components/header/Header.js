import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { logOut } from '../redux/actions/authorization';
import { connect } from 'react-redux';

const Header = ({ cardCount, auth, logOut }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" href="#">
          Header
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {!auth.loggedIn ? (
                <NavLink to="/sign-in" className="nav-link">
                  Sign In
                </NavLink>
              ) : (
                <li onClick={logOut} className="nav-link">
                  Sign Out
                </li>
              )}
            </li>
            {auth.isAdmin && (
              <li>
                <NavLink exact to="/settings" className="nav-link">
                  Settings
                </NavLink>
              </li>
            )}
          </ul>
          {auth.loggedIn && (
            <span className="navbar-text text-center mr-4">Welcome, {auth.currentUser}</span>
          )}
          <span className="navbar-text text-center">{cardCount}</span>
        </div>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cardCount: state.cards.cards.length,
  auth: state.auth,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
