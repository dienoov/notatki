import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryNote from '../components/note/PrimaryNote';
import NewNote from '../components/note/NewNote';
import { getActiveNotes } from '../utils/network';
import ROUTES from './routes';

function Home() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    setIsLoading(true);

    const { error, data } = await getActiveNotes();
    if (error) navigate(ROUTES.SIGN_IN);
    else setNotes(data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <PrimaryNote notes={notes} isLoading={isLoading} fetchNotes={fetchNotes} />
      <NewNote fetchNotes={fetchNotes} />
    </>
  );
}

export default Home;
