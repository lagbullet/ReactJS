import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleReadOnly } from '../redux/actions/card';

const Settings = ({ readOnly, toggleReadOnly }) => {
  const Input = styled.input.attrs({
    type: 'checkbox',
    onChange: toggleReadOnly,
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
    <label>
      <Input className="ml-4" />
      Read only
    </label>
  );
};

const mapStateToProps = ({ cards }) => ({
  readOnly: cards.readOnly,
});

const mapDispatchToProps = {
  toggleReadOnly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
