// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);
export {db, auth};