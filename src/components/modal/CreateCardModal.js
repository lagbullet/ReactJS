import React from 'react';
import Modal from 'react-bootstrap/Modal';

class CreateCardModal extends React.Component {
  caption = '';
  text = '';

  handleCaptionChange = (event) => (this.caption = event.target.value);

  handleTextChange = (event) => (this.text = event.target.value);

  render() {
    const { show, handleClose, handleSave } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Caption</div>
          <input onChange={this.handleCaptionChange} />
          <div>Text</div>
          <input onChange={this.handleTextChange} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={() => handleSave(this.caption, this.text)}>
            Save card
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateCardModal;
