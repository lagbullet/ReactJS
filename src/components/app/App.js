import React from 'react';
import CardList from '../card-list';
import CreateCardModal from '../modal';
import Header from '../header';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    cards: [
      { id: 1, caption: 'Card 1', text: 'Text 1', selected: false },
      { id: 2, caption: 'Card 2', text: 'Text 2', selected: false },
      { id: 3, caption: 'Card 3', text: 'Text 3', selected: false },
      { id: 4, caption: 'Card 4', text: 'Text 4', selected: false },
      { id: 5, caption: 'Card 5', text: 'Text 5', selected: false },
      { id: 6, caption: 'Card 6', text: 'Text 6', selected: false },
      { id: 7, caption: 'Card 7', text: 'Text 7', selected: false },
    ],
    readOnly: false,
    showModal: false,
  };

  toggleReadOnly = () => this.setState(({ readOnly }) => ({ readOnly: !readOnly }));

  toggleShowModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  selectCardHandler = (cardId) =>
    this.setState(({ cards }) => ({
      cards: cards.map((card) => ({
        ...card,
        selected: card.id === cardId ? !card.selected : card.selected,
      })),
    }));

  removeSelected = () =>
    this.setState(({ cards }) => ({ cards: cards.filter(({ selected }) => !selected) }));

  saveCardHandler = (caption, text) => {
    this.setState(({ cards }) => ({
      cards: [...cards, { id: uuidv4(), caption: caption, text: text, selected: false }],
      showModal: false,
    }));
  };

  render() {
    const { cards, readOnly, showModal } = this.state;
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

    return (
      <React.Fragment>
        <Header>Header</Header>
        <label>
          <Input className="ml-4" />
          Read only
        </label>
        <div>
          <button onClick={this.toggleShowModal} className="btn btn-success ml-4 mr-4">
            Create card
          </button>
          <button className="btn btn-danger" onClick={this.removeSelected}>
            Remove selected cards
          </button>
        </div>
        <CreateCardModal
          show={showModal}
          handleClose={this.toggleShowModal}
          handleSave={this.saveCardHandler}
        />
        <CardList cards={cards} readOnly={readOnly} selectCardHandler={this.selectCardHandler} />
      </React.Fragment>
    );
  }
}

export default App;
