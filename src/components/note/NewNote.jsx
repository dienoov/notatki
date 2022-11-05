import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewNote({ onSave }) {
  const LIMIT = 50;

  const initialStates = {
    title: '',
    body: '',
    titleLimit: `${LIMIT}/${LIMIT}`,
    show: false,
    errors: [],
  };

  const [title, setTitle] = useState(initialStates.title);
  const [body, setBody] = useState(initialStates.body);
  const [titleLimit, setTitleLimit] = useState(initialStates.titleLimit);
  const [show, setShow] = useState(initialStates.show);
  const [errors, setErrors] = useState(initialStates.errors);

  const resetToInitialState = () => {
    setTitle(initialStates.title);
    setBody(initialStates.body);
    setTitleLimit(initialStates.titleLimit);
    setShow(initialStates.show);
    setErrors(initialStates.errors);
    document.getElementById('input-body').innerHTML = '';
  };

  const onTitleChange = (ev) => {
    setTitle(ev.target.value.substring(0, 50));
    setTitleLimit(`${50 - ev.target.value.substring(0, 50).length}/${LIMIT}`);
  };

  const onBodyChange = (ev) => {
    setBody(ev.target.innerHTML);
  };

  const onCancel = () => {
    resetToInitialState();
  };

  const onShow = () => {
    resetToInitialState();
    setShow(true);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const newErrors = [];

    if (title.length === 0) newErrors.push('Title must not be empty');
    if (title.length > 50) newErrors.push('Title must be less than 50 characters');
    if (body.length === 0) newErrors.push('Body must not be empty');

    if (errors.length !== 0) {
      setErrors(newErrors);
      return;
    }

    onSave({ title, body });

    resetToInitialState();
  };

  return (
    <>
      <div className="fab">
        <button type="button" className="fab__modal" onClick={onShow}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>New Note</span>
        </button>
      </div>
      <div className={`modal ${(show ? 'show' : '')}`}>
        <form action="#" className="modal__form" onSubmit={onSubmit}>
          <label htmlFor="input-title" className="modal__input">
            <input type="text" id="input-title" placeholder="Title" value={title} onChange={onTitleChange} />
            <span className="modal__limit">{titleLimit}</span>
          </label>
          <div className="modal__input">
            <div id="input-body" data-placeholder="Write something here..." onInput={onBodyChange} contentEditable />
          </div>
          <ul className="modal__errors">
            {errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
          <div className="modal__actions">
            <button type="button" className="modal__cancel" onClick={onCancel}>Cancel</button>
            <button type="submit" className="modal__submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

NewNote.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default NewNote;
