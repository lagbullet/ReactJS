import React from 'react';
import CardList from '../card-list';
import CreateCardModal from '../modal';
import Header from '../header';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Provider as CardsProvider, Consumer as CardConsumer } from '../../context/cards-context';

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

  render() {
    const { readOnly } = this.state;
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
    const Div = styled.div`
      position: absolute;
      display: inline-block;
      margin-left: 40%;
      border-radius: 20px;
      color: grey;
      text-align: center;
  }`;

    return (
      <CardsProvider>
        <CardConsumer>
          {(context) => (
            <React.Fragment>
              <Header>
                Header
                <Div>{context.cards.length}</Div>
              </Header>
              <label>
                <Input className="ml-4" />
                Read only
              </label>
              <div>
                <Button variant="success" onClick={context.toggleShowModal} className="ml-4 mr-4">
                  Create card
                </Button>
                <Button variant="danger" onClick={context.removeSelected}>
                  Remove selected cards
                </Button>
              </div>

              <CreateCardModal
                show={context.showModal}
                handleClose={context.toggleShowModal}
                handleSave={context.saveCardHandler}
              />
              <CardList
                cards={context.cards}
                readOnly={readOnly}
                selectCardHandler={context.selectCardHandler}
              />
            </React.Fragment>
          )}
        </CardConsumer>
      </CardsProvider>
    );
  }
}

export default App;
