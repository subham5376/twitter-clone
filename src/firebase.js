import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfe4A4AWK3B6SFjaD-DrRXuUcCh3MJsCM",
  authDomain: "twitter-clone-b83fe.firebaseapp.com",
  projectId: "twitter-clone-b83fe",
  storageBucket: "twitter-clone-b83fe.appspot.com",
  messagingSenderId: "1085381973659",
  appId: "1:1085381973659:web:4c9bd38ab05ed3abe0583e",
  measurementId: "G-SKN14NSMJ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
