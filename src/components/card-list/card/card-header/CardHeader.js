import React from 'react';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import ContentEditable from 'react-contenteditable';
import './CardHeader.scss';

const CardHeader = ({
  editable,
  caption,
  readOnly,
  handleChange,
  save,
  cancel,
  edit,
  toggleCheckbox,
}) => (
  <div className="caption-wrapper">
    <ContentEditable
      disabled={!editable}
      onChange={handleChange}
      html={caption}
      className="caption"
    />
    {editable ? (
      <React.Fragment>
        <MdSave className="card-icon" onClick={save} />
        <MdCancel className="card-icon" onClick={cancel} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        {!readOnly && <MdEdit className="card-icon" onClick={edit} />}
        <input className="card-icon" type="checkbox" onChange={toggleCheckbox} />
      </React.Fragment>
    )}
  </div>
);

export default CardHeader;
