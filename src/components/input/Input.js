import React from 'react';

class Input extends React.Component {
  onChange = ({ target: { value } }) => {
    const { validation } = this.props;
    let result;
    for (let i = 0; i < validation.length; i++) {
      result = this.props.validation[i](value);
      if (!result) {
        break;
      }
    }
    this.props.onValid(result, value);
  };

  render() {
    const { label, type, className, placeholder } = this.props;
    return (
      <React.Fragment>
        <label>{label}</label>
        <input {...{ type, className, placeholder }} onChange={this.onChange} />
      </React.Fragment>
    );
  }
}

export default Input;
