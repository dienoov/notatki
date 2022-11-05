import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

function NoteBody({ body }) {
  return (
    <div className="note__body">
      <p className="note__content">{parser(body)}</p>
    </div>
  );
}

NoteBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NoteBody;
