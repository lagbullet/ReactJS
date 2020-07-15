import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CardContext = React.createContext();
const { Provider, Consumer } = CardContext;

class CardsProvider extends Component {
  state = {
    cards: [
      { id: uuidv4(), caption: 'Card 1', text: 'Text 1', selected: false },
      { id: uuidv4(), caption: 'Card 2', text: 'Text 2', selected: false },
      { id: uuidv4(), caption: 'Card 3', text: 'Text 3', selected: false },
      { id: uuidv4(), caption: 'Card 4', text: 'Text 4', selected: false },
      { id: uuidv4(), caption: 'Card 5', text: 'Text 5', selected: false },
      { id: uuidv4(), caption: 'Card 6', text: 'Text 6', selected: false },
      { id: uuidv4(), caption: 'Card 7', text: 'Text 7', selected: false },
    ],
  };

  selectCardHandler = (cardId) =>
    this.setState(({ cards }) => ({
      cards: cards.map((card) => ({
        ...card,
        selected: card.id === cardId ? !card.selected : card.selected,
      })),
    }));

  saveCardHandler = (caption, text) => {
    this.setState(({ cards }) => ({
      cards: [...cards, { id: uuidv4(), caption: caption, text: text, selected: false }],
    }));
  };

  removeSelected = () =>
    this.setState(({ cards }) => ({ cards: cards.filter(({ selected }) => !selected) }));

  render() {
    const { cards, showModal } = this.state;
    return (
      <Provider
        value={{
          cards: cards,
          showModal: showModal,
          selectCardHandler: this.selectCardHandler,
          saveCardHandler: this.saveCardHandler,
          removeSelected: this.removeSelected,
          toggleShowModal: this.toggleShowModal,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CardsProvider as Provider, Consumer, CardContext };
