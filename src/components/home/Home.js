import React from 'react';
import CardList from '../card-list';
import CreateCardModal from '../modal';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Consumer as CardConsumer } from '../../context/cards-context';

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

    return (
      <CardConsumer>
        {(context) => (
          <React.Fragment>
            <label>
              <Input className="ml-4" />
              Read only
            </label>
            <div>
              <Button variant="success" onClick={this.toggleShowModal} className="ml-4 mr-4">
                Create card
              </Button>
              <Button variant="danger" onClick={context.removeSelected}>
                Remove selected cards
              </Button>
            </div>

            <CreateCardModal
              show={showModal}
              handleClose={this.toggleShowModal}
              handleSave={(caption, text) => {
                context.saveCardHandler(caption, text);
                this.toggleShowModal();
              }}
            />
            <CardList
              cards={context.cards}
              readOnly={readOnly}
              selectCardHandler={context.selectCardHandler}
              editCardHandler={context.editCardHandler}
            />
          </React.Fragment>
        )}
      </CardConsumer>
    );
  }
}

export default Home;
