import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUrgFmR9swqrE5oG0jeOzB5rKMlnEXbt4",
  authDomain: "clone-25694.firebaseapp.com",
  projectId: "clone-25694",
  storageBucket: "clone-25694.appspot.com",
  messagingSenderId: "261667700451",
  appId: "1:261667700451:web:6b108ff2420ec79f380fd6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
