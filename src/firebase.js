// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
 
  apiKey: "AIzaSyCUPl8kADAZLKMFCU_cit-8Hq-1S-by74Q",
  authDomain: "fash-216f5.firebaseapp.com",
  projectId: "fash-216f5",
  storageBucket: "fash-216f5.firebasestorage.app",
  messagingSenderId: "533398349992",
  appId: "1:533398349992:web:a182e697d8de5f6a4d7a9d",
  measurementId: "G-MY309KX5B3"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export { auth, providerGoogle, providerFacebook };
