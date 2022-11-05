import React from 'react';
import PropTypes from 'prop-types';

class NewNote extends React.Component {
  static get initialStates() {
    return {
      title: '',
      body: '',
      titleLimit: '50/50',
      show: false,
      errors: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = NewNote.initialStates;

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(ev) {
    const title = ev.target.value.substring(0, 50);
    const limit = 50 - title.length;

    this.setState((prev) => ({
      ...prev,
      title,
      titleLimit: `${limit}/50`,
    }));
  }

  onBodyChange(ev) {
    this.setState((prev) => ({
      ...prev,
      body: ev.target.innerHTML,
    }));
  }

  onCancel() {
    this.setState(({
      ...NewNote.initialStates,
    }));
  }

  onShow() {
    this.setState(({
      ...NewNote.initialStates,
      show: true,
    }));
  }

  onSubmit(ev) {
    ev.preventDefault();

    const { title, body } = this.state;
    const errors = [];

    if (title.length === 0) errors.push('Title must not be empty');
    if (title.length > 50) errors.push('Title must be less than 50 characters');
    if (body.length === 0) errors.push('Body must not be empty');

    if (errors.length !== 0) {
      this.setState((prev) => ({
        ...prev,
        errors,
      }));
      return;
    }

    const { onSave } = this.props;
    onSave({ title, body });

    this.setState({
      ...NewNote.initialStates,
    });
  }

  render() {
    const {
      title, titleLimit, show, errors,
    } = this.state;

    return (
      <>
        <div className="fab">
          <button type="button" className="fab__modal" onClick={this.onShow}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>New Note</span>
          </button>
        </div>
        <div className={`modal ${(show ? 'show' : '')}`}>
          <form action="#" className="modal__form" onSubmit={this.onSubmit}>
            <label htmlFor="input-title" className="modal__input">
              <input type="text" id="input-title" placeholder="Title" value={title} onChange={this.onTitleChange} />
              <span className="modal__limit">{titleLimit}</span>
            </label>
            <div className="modal__input">
              <div id="input-body" data-placeholder="Write something here..." onInput={this.onBodyChange} contentEditable />
            </div>
            <ul className="modal__errors">
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
            <div className="modal__actions">
              <button type="button" className="modal__cancel" onClick={this.onCancel}>Cancel</button>
              <button type="submit" className="modal__submit">Save</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

NewNote.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default NewNote;
