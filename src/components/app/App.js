import React from 'react';
import Header from '../header';
import Routes from '../routes';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCards } from '../redux/actions/card';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => {
    return axios
      .get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then((response) => dispatch(fetchCards(response)));
  },
});

export default connect(null, mapDispatchToProps)(App);
