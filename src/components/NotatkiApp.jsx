import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import dummy from '../utils/dummy';
import Header from './Header';
import Main from './Main';

function NotatkiApp() {
  const [notes, setNotes] = useState(dummy);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchValue('');
    searchParams.delete('s');
  }, [window.location.pathname]);

  const filterNotes = () => {
    const regex = new RegExp(searchValue, 'i');

    setFilteredNotes(notes.filter(({ archived }) => archived === (window.location.pathname === '/archive')));

    setFilteredNotes(notes.filter(({ title }) => regex.test(title)));
  };

  useEffect(() => {
    filterNotes();
  }, [searchValue]);

  useEffect(() => {
    filterNotes();
  }, [notes]);

  const onDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onArchive = (id) => {
    const archiveIndex = notes.findIndex((note) => note.id === id);

    setNotes(notes.map((note, index) => {
      const archiveNote = note;

      if (archiveIndex === index) archiveNote.archived = !archiveNote.archived;

      return archiveNote;
    }));
  };

  const onSearch = (ev) => {
    setSearchValue(ev.target.value);
    setSearchParams({ s: ev.target.value });
  };

  const onSave = ({ title, body }) => {
    setNotes((oldNotes) => [...oldNotes, {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    }]);
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
