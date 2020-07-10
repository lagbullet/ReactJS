import React from 'react';
import ContentEditable from 'react-contenteditable';

const CardBody = ({ editable, handleChange, children }) => (
  <ContentEditable
    disabled={!editable}
    onChange={handleChange}
    html={children}
    className="card-body"
  />
);

export default CardBody;
