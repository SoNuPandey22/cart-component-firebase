import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBLumo8undwqyXTw7rj1GcgaOkKZUHIq-M",
    authDomain: "cartproject-503e7.firebaseapp.com",
    projectId: "cartproject-503e7",
    storageBucket: "cartproject-503e7.appspot.com",
    messagingSenderId: "476152543800",
    appId: "1:476152543800:web:10126ef18f3f1105a104cd",
    measurementId: "G-T0DDD4VYG1"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
   firebase.analytics();
  const db = getFirestore();
  console.log('db',db);
  // console.log('from index file', a); ,making the connection succes
  // firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));


