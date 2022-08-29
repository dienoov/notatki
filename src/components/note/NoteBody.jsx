import React from 'react';
import PropTypes from 'prop-types';

function NoteBody({ body }) {
  return (
    <div className="note__body">
      <p className="note__content">{body}</p>
    </div>
  );
}

NoteBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NoteBody;
