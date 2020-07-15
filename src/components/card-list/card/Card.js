import React from 'react';
import classNames from 'classnames';
import CardHeader from './card-header';
import CardBody from './card-body';
import withLoadingDelay from '../../hoc/WithLoadingDelay.js';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {
  state = {
    checked: false,
    editable: false,
    caption: this.props.caption,
    tempCaption: this.props.caption,
    children: this.props.children,
    tempChildren: this.props.children,
  };

  toggleCheckboxChange = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
    this.props.selectHandler();
  };

  editCard = () => this.setState(() => ({ checked: false, editable: true }));

  handleCaptionChange = (event) => this.setState(() => ({ caption: event.target.value }));

  handleTextChange = (event) => this.setState(() => ({ children: event.target.value }));

  saveChanges = () =>
    this.setState(({ caption, children }) => ({
      editable: false,
      tempCaption: caption,
      tempChildren: children,
    }));

  cancelChanges = () =>
    this.setState(({ tempCaption, tempChildren }) => ({
      editable: false,
      caption: tempCaption,
      children: tempChildren,
    }));

  static getDerivedStateFromProps(props, state) {
    if (props.readOnly) {
      return {
        editable: false,
        caption: state.tempCaption,
        children: state.tempChildren,
      };
    }
    return state;
  }

  render() {
    const { checked, editable, caption, children } = this.state;
    const { readOnly } = this.props;
    const cardClass = classNames({
      card: true,
      'mb-3': true,
      'text-white': true,
      'bg-danger': checked,
      'bg-dark': !checked,
    });
    return (
      <div className={cardClass}>
        <CardHeader
          editable={editable}
          caption={caption}
          readOnly={readOnly}
          handleChange={this.handleCaptionChange}
          onSave={this.saveChanges}
          onCancel={this.cancelChanges}
          onEdit={this.editCard}
          onChecked={this.toggleCheckboxChange}
        />
        <CardBody editable={editable} handleChange={this.handleTextChange} children={children} />
      </div>
    );
  }
}

Card.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default withLoadingDelay(Card);
