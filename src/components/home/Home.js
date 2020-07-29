import React from 'react';
import CardList from '../card-list';
import CreateCardModal from '../modal';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as cardActions from '../redux/actions/card';

class Home extends React.Component {
  state = {
    readOnly: false,
    showModal: false,
  };

  toggleReadOnly = () => this.setState(({ readOnly }) => ({ readOnly: !readOnly }));

  toggleShowModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    const { readOnly, showModal } = this.state;
    const Input = styled.input.attrs({
      type: 'checkbox',
      onChange: this.toggleReadOnly,
      checked: readOnly,
    })`
      padding: 0.5em;
      margin: 0.5em;
      display: inline-block;
      width: 16px;
      height: 16px;
      background: papayawhip;
      border-radius: 3px;
      border: none;
      &:checked {
        background: salmon;
      }
    `;
    const {
      saveCardHandler,
      removeSelected,
      selectCardHandler,
      editCardHandler,
      cards,
    } = this.props;
    return (
      <React.Fragment>
        <label>
          <Input className="ml-4" />
          Read only
        </label>
        <div>
          <Button variant="success" onClick={this.toggleShowModal} className="ml-4 mr-4">
            Create card
          </Button>
          <Button variant="danger" onClick={removeSelected}>
            Remove selected cards
          </Button>
        </div>
        <React.Fragment>
          <CreateCardModal
            show={showModal}
            handleClose={this.toggleShowModal}
            handleSave={(caption, text) => {
              saveCardHandler(caption, text);
              this.toggleShowModal();
            }}
          />
          <CardList
            cards={cards}
            readOnly={readOnly}
            selectCardHandler={selectCardHandler}
            editCardHandler={editCardHandler}
          />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state,
});

const mapDispatchToProps = (dispatch) => ({
  saveCardHandler: (caption, text) => dispatch(cardActions.saveCardHandler(caption, text)),
  removeSelected: () => dispatch(cardActions.removeSelectedCards()),
  selectCardHandler: (cardId) => dispatch(cardActions.selectCardHandler(cardId)),
  editCardHandler: (cardId, newCaption, newText) =>
    dispatch(cardActions.editCardHandler(cardId, newCaption, newText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
