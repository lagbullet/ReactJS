import React from 'react';
import classNames from 'classnames';
import CardHeader from './card-header';
import CardBody from './card-body';
import { connect } from 'react-redux';
import * as cardActions from '../../redux/actions/card';
import './Card.scss';

class SingleCard extends React.Component {
  state = {
    checked: false,
    editable: false,
    caption: this.props.location.caption,
    tempCaption: this.props.location.caption,
    children: this.props.location.children,
    tempChildren: this.props.location.children,
  };

  toggleCheckboxChange = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
  };

  editCard = () => this.setState(() => ({ checked: false, editable: true }));

  handleCaptionChange = (event) => this.setState(() => ({ caption: event.target.value }));

  handleTextChange = (event) => this.setState(() => ({ children: event.target.value }));

  saveChanges = () => {
    this.setState(({ caption, children }) => {
      this.props.editCardHandler(this.props.match.params.id, caption, children);
      return {
        editable: false,
        tempCaption: caption,
        tempChildren: children,
      };
    });
  };

  cancelChanges = () => {
    this.setState(({ tempCaption, tempChildren }) => ({
      editable: false,
      caption: tempCaption,
      children: tempChildren,
    }));
  };

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
    const { checked, editable, caption, children, redirect } = this.state;
    const { readOnly, redirectToCard } = this.props;
    const cardClass = classNames({
      card: true,
      'ml-3': true,
      'mt-3': true,
      'text-white': true,
      'bg-danger': checked,
      'bg-dark': !checked,
    });
    if (redirect) {
      return redirectToCard;
    }
    return (
      <div className={cardClass} onDoubleClick={this.handleRedirect}>
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
        <CardBody editable={editable} handleChange={this.handleTextChange}>
          {children}
        </CardBody>
      </div>
    );
  }
}

const mapDispatchToProps = {
  editCardHandler: cardActions.editCardHandler,
};

export default connect(null, mapDispatchToProps)(SingleCard);
