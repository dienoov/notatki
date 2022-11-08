import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PrimaryNote from '../components/note/PrimaryNote';
import NewNote from '../components/note/NewNote';
import { getActiveNotes } from '../utils/network';
import ROUTES from './routes';

function Home() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const fetchNotes = async () => {
    setIsLoading(true);

    const { error, data } = await getActiveNotes();
    if (error) navigate(ROUTES.SIGN_IN);
    else setNotes(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const onSearch = (s) => {
    setSearchParams({ s });
  };

  const filterNotes = () => {
    if (!searchParams.has('s') || !searchParams.get('s')) {
      setFilteredNotes(notes);
      return;
    }

    const regex = new RegExp(searchParams.get('s'), 'i');
    setFilteredNotes(notes.filter(({ title }) => regex.test(title)));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    filterNotes();
  }, [notes]);

  useEffect(() => {
    filterNotes();
  }, [searchParams]);

  return (
    <>
      <PrimaryNote
        notes={filteredNotes}
        isLoading={isLoading}
        fetchNotes={fetchNotes}
        onSearch={onSearch}
      />
      <NewNote fetchNotes={fetchNotes} />
    </>
  );
}

export default Home;
