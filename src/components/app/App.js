import React from 'react';
import CardList from '../card-list';
import Header from '../header';
import styled from 'styled-components';
import './App.scss';

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
  };

  toggleReadOnly = () => this.setState(({ readOnly }) => ({ readOnly: !readOnly }));

  selectCardHandler = (cardId) =>
    this.setState(({ cards }) => ({
      cards: cards.map((card) => ({
        ...card,
        selected: card.id === cardId ? !card.selected : card.selected,
      })),
    }));

  removeSelected = () =>
    this.setState(({ cards }) => ({ cards: cards.filter(({ selected }) => !selected) }));

  render() {
    const { cards, readOnly } = this.state;
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
        <Input />
        <div className="read-only-text">Read only</div>
        <input
          className="remove-selected-button"
          type="button"
          onClick={this.removeSelected}
          value="Remove selected cards"
        />
        <CardList cards={cards} readOnly={readOnly} selectCard={this.selectCardHandler} />
      </React.Fragment>
    );
  }
}

export default App;
