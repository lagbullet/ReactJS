import React from 'react';
import Card from '../card';
import Header from '../header';
import styled from 'styled-components';
import './App.scss';

class App extends React.Component {
  state = {
    cards: [
      { caption: 'Card 1', text: 'Text 1' },
      { caption: 'Card 2', text: 'Text 2' },
      { caption: 'Card 3', text: 'Text 3' },
      { caption: 'Card 4', text: 'Text 4' },
      { caption: 'Card 5', text: 'Text 5' },
      { caption: 'Card 6', text: 'Text 6' },
      { caption: 'Card 7', text: 'Text 7' },
    ],
    readOnly: false,
  };

  toggleReadOnly = () => {
    this.setState(({ readOnly }) => ({ readOnly: !readOnly }));
  };

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
        <div className="card-wrapper">
          {cards.map(({ caption, text }, i) => {
            return (
              <Card key={i} className="card" caption={caption} readOnly={readOnly}>
                {text}
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
