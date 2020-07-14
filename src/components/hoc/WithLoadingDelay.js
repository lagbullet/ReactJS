import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function withLoadingDelay(WrappedComponent) {
  return class extends React.Component {
    state = {
      loaded: false,
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState(() => ({ loaded: true }));
      }, 2000);
    }

    render() {
      const { loaded } = this.state;
      return loaded ? <WrappedComponent {...this.props} /> : <Spinner animation="border" />;
    }
  };
}

export default withLoadingDelay;
