import React from 'react';

class Input extends React.Component {
  render() {
    const { label, ...rest } = this.props;
    return (
      <React.Fragment>
        <label>{label}</label>
        <input {...rest} />
      </React.Fragment>
    );
  }
}

export default Input;
