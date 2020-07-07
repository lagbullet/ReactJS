import React from 'react';
import classNames from 'classnames';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import ContentEditable from 'react-contenteditable';
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

  toggleCheckboxChange = () => this.setState(({ checked }) => ({ checked: !checked }));

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

  render() {
    const { checked, editable, caption, children } = this.state;
    const cardClass = classNames({
      card: true,
      'red-card': checked,
      'green-card': !checked,
    });
    return (
      <div className={cardClass}>
        <div className="caption-wrapper">
          <ContentEditable
            disabled={!editable}
            onChange={this.handleCaptionChange}
            html={caption}
            className="caption"
          />
          {editable ? (
            <React.Fragment>
              <MdSave className="card-icon" onClick={this.saveChanges} />
              <MdCancel className="card-icon" onClick={this.cancelChanges} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <MdEdit className="card-icon" onClick={this.editCard} />
              <input className="card-icon" type="checkbox" onChange={this.toggleCheckboxChange} />
            </React.Fragment>
          )}
        </div>
        <ContentEditable
          disabled={!editable}
          onChange={this.handleTextChange}
          html={children}
          className="text"
        />
      </div>
    );
  }
}

export default Card;
