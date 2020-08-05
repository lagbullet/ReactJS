import React from 'react';
import CardList from '../card-list';
import CreateCardModal from '../modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as cardActions from '../redux/actions/card';

class Home extends React.Component {
  state = {
    showModal: false,
  };

  toggleShowModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    const { showModal } = this.state;
    const {
      saveCardHandler,
      removeSelected,
      selectCardHandler,
      editCardHandler,
      readOnly,
      cards,
    } = this.props;
    return (
      <React.Fragment>
        <div className="mt-4">
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

const mapStateToProps = ({ cards }) => ({
  cards: cards.cards,
  readOnly: cards.readOnly,
});

const mapDispatchToProps = (dispatch) => ({
  saveCardHandler: (caption, text) => dispatch(cardActions.saveCardHandler(caption, text)),
  removeSelected: () => dispatch(cardActions.removeSelectedCards()),
  selectCardHandler: (cardId) => dispatch(cardActions.selectCardHandler(cardId)),
  editCardHandler: (cardId, newCaption, newText) =>
    dispatch(cardActions.editCardHandler(cardId, newCaption, newText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
