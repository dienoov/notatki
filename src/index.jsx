import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import NotatkiApp from './components/NotatkiApp';

import './styles/index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NotatkiApp />
  </BrowserRouter>,
);
