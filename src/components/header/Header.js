import React from 'react';
import './Header.scss';

const Header = (props) => {
  const { children } = props;
  return <header className="header">{children}</header>;
};

export default Header;
