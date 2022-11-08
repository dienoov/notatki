import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Note from '../components/note/Note';
import ROUTES from './routes';
import { getNote } from '../utils/network';
import LoadingAnimation from '../components/LoadingAnimation';

function Detail() {
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      setIsLoading(true);

      const { error, data } = await getNote(id);

      if (error) navigate(ROUTES.NOT_FOUND);
      else setNote(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    fetchNote();
  }, []);

  return isLoading ? <LoadingAnimation /> : (
    <Note
      archived={note.archived}
      createdAt={note.createdAt}
      id={note.id}
      title={note.title}
      body={note.body}
      detail
    />
  );
}

export default Detail;
