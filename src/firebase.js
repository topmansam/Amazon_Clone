import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxjUvx_nNnUOSJDQw9MstRAySIq4QrF0c",
  authDomain: "fir-42dd5.firebaseapp.com",
  projectId: "fir-42dd5",
  storageBucket: "fir-42dd5.appspot.com",
  messagingSenderId: "927351847708",
  appId: "1:927351847708:web:7c31088899f4410f26d8d9",
  measurementId: "G-VQRMJHPEL4"

};
;

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };