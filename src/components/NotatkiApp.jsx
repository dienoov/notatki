import React from 'react';
import dummy from '../utils/dummy';
import Header from './Header';
import Main from './Main';

class NotatkiApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: dummy };
  }

  render() {
    const { notes } = this.state;

    return (
      <>
        <Header />
        <Main notes={notes} />
      </>
    );
  }
}

export default NotatkiApp;
