import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';

import NotatkiApp from './components/NotatkiApp';

const root = createRoot(document.getElementById('root'));

root.render(<NotatkiApp />);
