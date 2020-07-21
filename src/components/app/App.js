import React from 'react';
import Header from '../header';
import Routes from '../routes';
import { Consumer as CardConsumer } from '../../context/cards-context';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CardConsumer>{(context) => <Header cardCount={context.cards.length} />}</CardConsumer>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
