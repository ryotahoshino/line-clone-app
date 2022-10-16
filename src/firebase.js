import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRA9FNebC4NFYXAPIeiiqv9B2gLQ47uFo",
  authDomain: "line-clone-app-6bd93.firebaseapp.com",
  projectId: "line-clone-app-6bd93",
  storageBucket: "line-clone-app-6bd93.appspot.com",
  messagingSenderId: "66955775965",
  appId: "1:66955775965:web:cfabf270f0fdb45a8a3034"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};