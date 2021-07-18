import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3DBthNjrPDcL9xPk8QpAQBsO6faf6RzA",
  authDomain: "av-designs.firebaseapp.com",
  projectId: "av-designs",
  storageBucket: "av-designs.appspot.com",
  messagingSenderId: "254191268874",
  appId: "1:254191268874:web:c5cda60a54d1c180659bf3",
  measurementId: "G-JS8EBVPPS9",
});

var db = firebaseApp.firestore();

export default db;
