import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFxTAZ6OaH8-D7sLgjF_rdwdERqGbP_Ig",
  authDomain: "heather-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://heather-catch-of-the-day.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };
// This is a default export
export default base;