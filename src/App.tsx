import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './modules/Navigator/Navigator.container';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
