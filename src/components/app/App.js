import React from 'react';
import Header from '../header';
import Routes from '../routes';
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

const mapDispatchToProps = {
  fetchCards,
};

export default connect(null, mapDispatchToProps)(App);
