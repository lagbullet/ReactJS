import React from 'react';
import ContentEditable from 'react-contenteditable';
import './CardBody.scss';

const CardBody = ({ editable, handleChange, children }) => (
  <ContentEditable disabled={!editable} onChange={handleChange} html={children} className="text" />
);

export default CardBody;
