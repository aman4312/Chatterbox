import firebase from 'firebase/app';
import 'firebase/auth';

// export all the things from firebase
export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyANeywg4MNQwd0fRJgdFWSCzOVoMWNY27o',
    authDomain: 'chatterbox-ebdf8.firebaseapp.com',
    projectId: 'chatterbox-ebdf8',
    storageBucket: 'chatterbox-ebdf8.appspot.com',
    messagingSenderId: '961896948983',
    appId: '1:961896948983:web:e164ca00d2ad26d5b7dff2',
  })
  .auth();
