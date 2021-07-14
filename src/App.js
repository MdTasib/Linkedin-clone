/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import { Container } from '@material-ui/core';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { selectUser, logout, login } from './features/userSlice';
import Login from './components/Login/Login';
import firebase from 'firebase';
import Widgets from './components/Widgets/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

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
                <Widgets />
              </div>
            </Container>
          )
      }
    </div>
  );
}

export default App;
