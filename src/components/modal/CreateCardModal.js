import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CreateCardModal extends React.Component {
  handleCaptionChange = (event) => (this.caption = event.target.value);

  handleTextChange = (event) => (this.text = event.target.value);

  render() {
    this.caption = '';
    this.text = '';
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(this.caption, this.text)}>
            Save card
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateCardModal;
