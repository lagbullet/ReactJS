import React from 'react';
import './Header.scss';

class Header extends React.Component {

  render() {
      const {className, text} = this.props;
      return (
        <header class={className}>{text}</header>
      );
  }
}

export default Header;