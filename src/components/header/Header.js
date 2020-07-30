import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ cardCount }) => {
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
              <NavLink to="/sign-in" className="nav-link">
                Sign In
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text text-center">{cardCount}</span>
        </div>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = (cards) => ({
  cardCount: cards.length,
});

export default connect(mapStateToProps, null)(Header);
