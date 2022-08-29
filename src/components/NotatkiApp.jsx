import React from 'react';
import dummy from '../utils/dummy';
import Header from './Header';
import Main from './Main';

class NotatkiApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: dummy };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
  }

  onDelete(id) {
    const { notes } = this.state;

    this.setState({
      notes: notes.filter((note) => note.id !== id),
    });
  }

  onArchive(id) {
    const { notes } = this.state;
    const foundIndex = notes.findIndex((note) => note.id === id);
    notes[foundIndex].archived = !notes[foundIndex].archived;

    this.setState({
      notes,
    });
  }

  render() {
    const { notes } = this.state;

    return (
      <>
        <Header />
        <Main notes={notes} onDelete={this.onDelete} onArchive={this.onArchive} />
      </>
    );
  }
}

export default NotatkiApp;
