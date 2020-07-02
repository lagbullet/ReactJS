import React from 'react';
import './Card.scss';

class Card extends React.Component {
  state = {
    color: 'green',
  };

  render() {
    const { caption, children } = this.props;
    return (
      <div className={this.state.color + ' card '}>
        <div className="captionWrapper">
          <div className="caption">{caption}</div>
          <input className="checkbox" type="checkbox" onChange={this.toggleCheckboxChange} />
        </div>
        <div className="text">{children}</div>
      </div>
    );
  }

  toggleCheckboxChange = () =>
    this.setState(({ color }) => ({ color: color === 'green' ? 'red' : 'green' }));
}

export default Card;
