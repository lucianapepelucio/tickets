import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyD9WqANrU1JE3DZeU7efewl8ayo_aACx9k",
    authDomain: "sistema-f1115.firebaseapp.com",
    projectId: "sistema-f1115",
    storageBucket: "sistema-f1115.appspot.com",
    messagingSenderId: "225279620470",
    appId: "1:225279620470:web:cb8145fd931e794ba2f657",
    measurementId: "G-YYSQCH288X"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;