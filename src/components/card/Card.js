import React from 'react';
import classNames from 'classnames';
import './Card.scss';

class Card extends React.Component {
  state = {
    checked: false,
  };

  toggleCheckboxChange = () => this.setState(({ checked }) => ({ checked: !checked }));

  render() {
    const { caption, children } = this.props;
    const cardClass = classNames({
      card: true,
      redCard: this.state.checked,
      greenCard: !this.state.checked,
    });
    return (
      <div className={cardClass}>
        <div className="captionWrapper">
          <div className="caption">{caption}</div>
          <input className="checkbox" type="checkbox" onChange={this.toggleCheckboxChange} />
        </div>
        <div className="text">{children}</div>
      </div>
    );
  }
}

export default Card;
