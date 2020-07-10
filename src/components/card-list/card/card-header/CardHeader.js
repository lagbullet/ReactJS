import React from 'react';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import ContentEditable from 'react-contenteditable';
import './CardHeader.scss';

const CardHeader = ({
  editable,
  caption,
  readOnly,
  handleChange,
  onSave,
  onCancel,
  onEdit,
  onChecked,
}) => (
  <div className="caption-wrapper card-header">
    <ContentEditable
      disabled={!editable}
      onChange={handleChange}
      html={caption}
      className="caption"
    />
    {editable ? (
      <React.Fragment>
        <MdSave className="card-icon" onClick={onSave} />
        <MdCancel className="card-icon" onClick={onCancel} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        {!readOnly && <MdEdit className="card-icon" onClick={onEdit} />}
        <input className="card-icon" type="checkbox" onChange={onChecked} />
      </React.Fragment>
    )}
  </div>
);

export default CardHeader;
