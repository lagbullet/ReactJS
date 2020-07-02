import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    const { children } = this.props;
    return <header className="header">{children}</header>;
  }
}

export default Header;
