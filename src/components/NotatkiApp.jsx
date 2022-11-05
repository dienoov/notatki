import React, { useState } from 'react';
import dummy from '../utils/dummy';
import Header from './Header';
import Main from './Main';

function NotatkiApp() {
  const [notes, setNotes] = useState(dummy);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const filterNotes = () => {
    const regex = new RegExp(searchValue, 'i');

    setFilteredNotes(notes.filter(({ archived }) => archived === (window.location.pathname === '/archive')));

    setFilteredNotes(filteredNotes.filter(({ title }) => regex.test(title)));
  };

  const onDelete = async (id) => {
    await setNotes(notes.filter((note) => note.id !== id));
    filterNotes();
  };

  const onArchive = async (id) => {
    const archiveIndex = notes.findIndex((note) => note.id === id);

    await setNotes(notes.map((note, index) => {
      const archiveNote = note;

      if (archiveIndex === index) archiveNote.archived = !archiveNote.archived;

      return archiveNote;
    }));

    filterNotes();
  };

  const onSearch = async (ev) => {
    await setSearchValue(ev.target.value);
    filterNotes();
  };

  const onSave = async ({ title, body }) => {
    await setNotes((oldNotes) => [...oldNotes, {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    }]);

    filterNotes();
  };

  return (
    <>
      <Header onSearch={onSearch} searchValue={searchValue} />
      <Main
        notes={searchValue === '' ? notes : filteredNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        onSave={onSave}
      />
    </>
  );
}

export default NotatkiApp;
