import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const CardContext = React.createContext();
const { Provider, Consumer } = CardContext;

class CardsProvider extends Component {
  state = {
    cards: [],
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
      cards: [...cards, { id: uuidv4(), caption: caption, text: text }],
    }));
  };

  removeSelected = () =>
    this.setState(({ cards }) => ({ cards: cards.filter(({ selected }) => !selected) }));

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then((response) => {
        this.setState(() => ({
          cards: response.data
            .slice(0, 15)
            .map(({ Number, Name, About }) => ({ id: Number, caption: Name, text: About })),
        }));
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <Provider
        value={{
          cards: cards,
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
