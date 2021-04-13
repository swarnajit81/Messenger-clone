import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJITtu7wtKjh3PdUKX9Rf2qBcQ9hO1JZ8",
  authDomain: "facebook-messenger-clone-e3166.firebaseapp.com",
  projectId: "facebook-messenger-clone-e3166",
  storageBucket: "facebook-messenger-clone-e3166.appspot.com",
  messagingSenderId: "538945830238",
  appId: "1:538945830238:web:173e31aebf9b3e24aba3cf",
  measurementId: "G-5MPM239VPD",
});

const db = firebaseApp.firestore();

export default db;
