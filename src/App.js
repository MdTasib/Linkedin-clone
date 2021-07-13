import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Container } from '@material-ui/core';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Container>
        {/* App Body */}
        <div className="app__body">
          <Sidebar />
        </div>
        {/* Feed */}
        {/* Widgets */}
      </Container>
    </div>
  );
}

export default App;
