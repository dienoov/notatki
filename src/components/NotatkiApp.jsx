import React from 'react';
import dummy from '../utils/dummy';
import Header from './Header';
import Main from './Main';

class NotatkiApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: dummy, filteredNotes: [], searchValue: '',
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onDelete(id) {
    this.setState((prev) => ({
      ...prev,
      notes: prev.notes.filter((note) => note.id !== id),
    }), this.filterNotes);
  }

  onArchive(id) {
    const { notes } = this.state;
    const index = notes.findIndex((note) => note.id === id);
    notes[index].archived = !notes[index].archived;

    this.setState((prev) => ({
      ...prev,
      notes,
    }), this.filterNotes);
  }

  onSearch(ev) {
    this.setState((prev) => ({
      ...prev,
      searchValue: ev.target.value,
    }), this.filterNotes);
  }

  filterNotes() {
    const { notes, searchValue } = this.state;
    const regex = new RegExp(searchValue, 'i');

    this.setState((prev) => ({
      ...prev,
      filteredNotes: notes.filter(({ title }) => regex.test(title)),
    }));
  }

  render() {
    const { notes, filteredNotes, searchValue } = this.state;

    return (
      <>
        <Header onSearch={this.onSearch} searchValue={searchValue} />
        <Main
          notes={searchValue === '' ? notes : filteredNotes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
        />
      </>
    );
  }
}

export default NotatkiApp;
