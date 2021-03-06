import firebase from 'firebase';
import firebaseConfig from './firebase.config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };