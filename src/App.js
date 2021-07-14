import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import { Container } from '@material-ui/core';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { selectUser } from './features/userSlice';
import Login from './components/Login/Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {
        !user ? (
          <Login />
        ) : (
            <Container>
              <div className="app__body">
                <Sidebar />
                <Feed />
              </div>
              {/* Widgets */}
            </Container>
          )
      }
    </div>
  );
}

export default App;
