// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// npm i firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwyvbd-v3ULHsydqTFfV2ncFwmaaZyqQ",
  authDomain: "kashmerch-2f775.firebaseapp.com",
  projectId: "kashmerch-2f775",
  storageBucket: "kashmerch-2f775.appspot.com",
  messagingSenderId: "602169508893",
  appId: "1:602169508893:web:4173d956cbc52969ef32f4",
  measurementId: "G-7QWSMCV75R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};