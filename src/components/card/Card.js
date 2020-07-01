import React from 'react';
import './Card.scss';

class Card extends React.Component {

  render() {
      const {className, caption, data} = this.props;
      return (
        <div className={className}>
            <div className="caption">{caption}</div>
            <div>{data}</div>
        </div>
      );
  }
}

export default Card;