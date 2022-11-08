import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArchiveNote from '../components/note/ArchiveNote';
import { getArchivedNotes } from '../utils/network';
import ROUTES from './routes';

function Archive() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    setIsLoading(true);

    const { error, data } = await getArchivedNotes();
    if (error) navigate(ROUTES.SIGN_IN);
    else setNotes(data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ArchiveNote notes={notes} isLoading={isLoading} fetchNotes={fetchNotes} />
  );
}

export default Archive;
