import React from 'react';
import logo from './argMap.svg';
import './App.css';

import ContainerProvincias from './components/ContainerProvincias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CoronaVirus ARG</h1>
       <ContainerProvincias />
      </header>
    </div>
  );
}

export default App;
