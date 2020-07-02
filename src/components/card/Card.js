import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { caption, children } = this.props;
    return (
      <div className="card">
        <div className="caption">{caption}</div>
        <div className="text">{children}</div>
      </div>
    );
  }
}

export default Card;
