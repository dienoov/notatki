import React from 'react';
import PropTypes from 'prop-types';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleLimit: '50/50',
      show: false,
    };

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
      body: ev.target.value,
    }));
  }

  onCancel() {
    this.setState(({
      title: '',
      body: '',
      titleLimit: '50/50',
      show: false,
    }));
  }

  onShow() {
    this.setState(({
      title: '',
      body: '',
      titleLimit: '50/50',
      show: true,
    }));
  }

  onSubmit(ev) {
    ev.preventDefault();

    const { title, body } = this.state;
    const { onSave } = this.props;

    this.setState({
      title: '',
      body: '',
      titleLimit: '50/50',
      show: false,
    });

    onSave({ title, body });
  }

  render() {
    const {
      title, body, titleLimit, show,
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
            <label htmlFor="input-body" className="modal__input">
              <textarea id="input-body" rows="10" placeholder="Write something here..." onChange={this.onBodyChange} value={body} />
            </label>
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
